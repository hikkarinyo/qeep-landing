import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import MySlider from '../../common/Slider/MySlider'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../../common/Button/Button'
import { Card } from '../../common/Card/Card'
import InputMask from 'react-input-mask'
import { SvgIcon } from '../../common/SvgIcon/SvgIcon'
import { Slide, toast } from 'react-toastify'

const cx = classNames.bind(require('./styles.scss'))
const schema = yup
    .object({
        name: yup.string().required('Обязательное поле'),
        phone: yup.string().required('Обязательное поле'),
        companyName: yup.string().required('Обязательное поле'),
        comment: yup.string(),
        salePoints: yup.number(),
    })

interface CalculatorProps {
    id: string
}

const Calculator = (props: CalculatorProps) => {
    const [salePointsTotal, setSalePointsTotal] = useState(5)
    const [productsTotal, setProductsTotal] = useState(300)
    const [ordersTotal, setOrdersTotal] = useState(1500)
    const [totalPrice, setTotalPrice] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)

    const {
        register, handleSubmit, formState: {errors},
        reset, control
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    // Количество филиалов
    const getSalePointsTotalPrice = (salePointsTotal: number) => {
        if (salePointsTotal === 1) {
            return 20000
        }
        return 30000
    }

    // Количество заказов в месяц
    const getOrdersTotalPrice = (ordersTotal: number) => {
        return Math.ceil(ordersTotal / 1000) * 10000 + 10000
    }

    // Сколько позиций в каталоге?
    const getProductsTotalPrice = (productsTotal: number) => {
        if (productsTotal <= 100) {
            return 20000
        }
        if (productsTotal > 100 && productsTotal < 1000) {
            return 30000
        }
        return 40000
    }

    const handleSalePointsChange = (value: number) => {
        setSalePointsTotal(value)
    }

    const handleOrdersChange = (value: number) => {
        setOrdersTotal(value)
    }

    const handleProductsChange = (value: number) => {
        setProductsTotal(value)
    }

    const updateTotalPrice = () => {
        const salePointsPrice = getSalePointsTotalPrice(salePointsTotal)
        const ordersPrice = getOrdersTotalPrice(ordersTotal)
        const productsPrice = getProductsTotalPrice(productsTotal)

        const maxPrice = Math.max(salePointsPrice, ordersPrice, productsPrice)
        setTotalPrice(maxPrice)
    }

    useEffect(() => {
        updateTotalPrice()
    }, [updateTotalPrice])


    const submit = handleSubmit(async (data) => {
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('phone', data.phone)
        formData.append('companyName', data.companyName)
        formData.append('comment',
            `
            Компания: '${data.companyName}'.
            Количество филиалов: ${salePointsTotal}.
            Позиции в каталоге: ${productsTotal}.
            Количество заказов в месяц: ${ordersTotal}.
            Итоговая сумма в калькуляторе: ${totalPrice}.
            Комментарий: ${data.comment || ''}.
            `)

        try {
            await fetch('https://demo.qeep.pro/process/application', {
                method: 'POST',
                body: formData
            })
            reset()
            toast.success(
                'Благодарим вас! Мы обязательно свяжемся с вами в ближайшее время.', {
                    position: toast.POSITION.TOP_RIGHT,
                    transition: Slide
                })
        } catch (error) {
            toast.error(
                'Возникла ошибка при обработке вашей заявки. Пожалуйста, попробуйте ещё раз позже.', {
                    position: toast.POSITION.TOP_RIGHT,
                    transition: Slide
                })
        }
        finally {
            setIsDisabled(false)
        }
    })

    return (
        <>
            <section id={props.id} className={cx('calculator container')}>
                <h1 className={cx('calculator__title')}>Рассчитайте ваш тариф</h1>
                <div className={cx('calculator__cards')}>
                    <Card className={cx('calculator__card')}>
                        <form className={cx('calculator__form')} onSubmit={submit}>
                            <div className={cx('calculator__inputs')}>
                                <div>
                                    {/*TODO: вынести input отдельно*/}
                                    <input
                                        className={cx('input-outline', {'input-outline__error': errors.name?.message})}
                                        {...register('name')}
                                        name={'name'}
                                        placeholder={'Имя'}
                                    />
                                    <p className={cx('input-outline__message', {'input-outline__message-error': errors.name?.message})}>
                                        {errors.name?.message}
                                    </p>
                                </div>
                                <div>
                                    <Controller
                                        control={control}
                                        name='phone'
                                        defaultValue={''}
                                        render={({ field: { onChange, value } }) => (
                                            <InputMask
                                                className={cx('input-outline', {'input-outline__error': errors.phone?.message})}
                                                mask='+7 (999) 999-99-99'
                                                placeholder='Телефон'
                                                onChange={onChange}
                                                value={value}
                                            />
                                        )}
                                    />
                                    <p className={cx('input-outline__message', {'input-outline__message-error': errors.phone?.message})}>
                                        {errors.phone?.message}
                                    </p>
                                </div>
                                <div>
                                    {/*TODO: вынести input отдельно*/}
                                    <input
                                        className={cx('input-outline', {'input-outline__error': errors.companyName?.message})}
                                        {...register('companyName')}
                                        name={'companyName'}
                                        placeholder={'Название компании'}
                                    />
                                    <p className={cx('input-outline__message', {'input-outline__message-error': errors.companyName?.message})}>
                                        {errors.companyName?.message}
                                    </p>
                                </div>
                                <div>
                                    {/*TODO: вынести input отдельно*/}
                                    <textarea
                                        className={cx('textarea-outline', {'textarea-outline__error': errors.comment?.message})}
                                        {...register('comment')}
                                        name={'comment'}
                                        placeholder={'Комментарий'}
                                    />
                                    <p className={cx('textarea-outline__message', {'textarea-outline__message-error': errors.comment?.message})}>
                                        {errors.comment?.message}
                                    </p>
                                </div>
                            </div>
                            <div className={cx('calculator__sliders')}>
                                <MySlider
                                    min={1}
                                    max={10}
                                    step={1}
                                    label='Количество филиалов'
                                    onChange={handleSalePointsChange}
                                    defaultValue={5}
                                />
                                <MySlider
                                    min={10}
                                    max={1000}
                                    step={10}
                                    label='Сколько позиций в каталоге?'
                                    onChange={handleProductsChange}
                                    defaultValue={300}
                                />
                                <MySlider
                                    min={100}
                                    max={10000}
                                    step={100}
                                    label='Количество заказов в месяц'
                                    onChange={handleOrdersChange}
                                    defaultValue={1500}
                                />
                            </div>
                            <div className={cx('calculator__btn')}>
                                <Button type='submit' disabled={isDisabled}>Отправить</Button>
                                <p className={cx('form__personal-information')}>
                                    Нажимая на кнопку, вы даете согласие на обработку
                                    <a href='#' className={cx('form__link')} target='_blank'>
                                        персональных данных
                                    </a>
                                </p>
                            </div>
                        </form>
                    </Card>
                    <div className={cx('calculator__card-right')}>
                        <Card className={cx('calculator__card')}>
                            <h1 className={cx('calculator__total-price')}>
                                от <br/>{totalPrice.toLocaleString()}<br/>руб/мес
                            </h1>
                        </Card>
                        <Card className={cx('calculator__card', 'calculator__card-image')}>
                            <SvgIcon src='/donermaster/catalog-half.png'/>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Calculator
