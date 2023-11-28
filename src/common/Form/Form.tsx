import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Button } from '../Button/Button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProps } from '../types'
import { toast, Slide } from 'react-toastify'
import { MyInput } from '../MyInput/MyInput'
import { MyPhoneInput } from '../MyInput/MyPhoneInput'
import { sendApplication } from '../../api'
import { schemaForm } from '../../helpers/validation'


const cx = classNames.bind(require('./styles.scss'))

const Form = ({onCloseModal}: FormProps) => {
    const {
        register, handleSubmit, formState: {errors},
        reset, control
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schemaForm),
    })
    const [isDisabled, setIsDisabled] = useState(false)

    const submit = handleSubmit(async (data) => {
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('phone', data.phone)
        formData.append('companyName', data.companyName)
        formData.append('comment', `Компания '${data.companyName}' ${data.comment || ''}`)

        try {
            setIsDisabled(true)
            await sendApplication(formData)
            reset()
            onCloseModal()
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
        } finally {
            setIsDisabled(false)
        }
    })

    useEffect(() => {
        return () => {
            reset()
        }
    }, [onCloseModal, reset])


    return (
        <>
            <h1 className={cx('form__title')}>Отправить заявку</h1>
            <form className={cx('form')} onSubmit={submit}>
                <MyInput
                    label='Имя'
                    name='name'
                    register={register}
                    error={errors.name?.message}
                    variant='input'
                />
                <MyPhoneInput
                    label='Телефон'
                    name='phone'
                    mask='+7 (999) 999-99-99'
                    control={control}
                    error={errors.phone?.message}
                    variant='input'
                />
                <MyInput
                    label='Название компании'
                    name='companyName'
                    register={register}
                    error={errors.companyName?.message}
                    variant='input'
                />
                <MyInput
                    label='Комментарий'
                    name='comment'
                    register={register}
                    error={errors.comment?.message}
                    variant='input'
                />
                <Button disabled={isDisabled} type='submit'>Отправить</Button>
                <p className={cx('form__personal-information')}>
                    Нажимая на кнопку, вы даете согласие на обработку
                    <a href='/doc/privacy-policy.pdf' className={cx('form__link')} target='_blank'>персональных данных</a>
                </p>
            </form>
        </>
    )
}

export default Form
