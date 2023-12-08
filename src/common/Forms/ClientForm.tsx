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
import { schemaClientForm } from '../../helpers/validation'
import { MyTextarea } from '../MyTextarea/MyTextarea'


const cx = classNames.bind(require('./styles.scss'))

const ClientForm = ({onCloseModal}: FormProps) => {
    const {
        register, handleSubmit, formState: {errors},
        reset, control
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schemaClientForm),
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
            if (onCloseModal) {
                onCloseModal()
            }
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
        <form className={cx('form')} onSubmit={submit}>
            <h1 className={cx('form__title')}>Отправить заявку</h1>
            <MyInput
                label='Имя'
                name='name'
                register={register}
                error={errors.name?.message}
                variant='my-input'
            />
            <MyPhoneInput
                label='Телефон'
                name='phone'
                mask='+7 (999) 999-99-99'
                control={control}
                error={errors.phone?.message}
                variant='my-input'
            />
            <MyInput
                label='Название компании'
                name='companyName'
                register={register}
                error={errors.companyName?.message}
                variant='my-input'
            />
            <MyTextarea
                label='Комментарий'
                name='comment'
                register={register}
                error={errors.comment?.message}
                variant='my-textarea'
            />
            <Button disabled={isDisabled} type='submit'>Отправить</Button>
            <p className={cx('form__personal-information')}>
                Нажимая на кнопку, вы даете согласие на обработку
                <a href='/doc/privacy-policy.pdf' className={cx('form__link')} target='_blank'>персональных данных</a>
            </p>
        </form>
    )
}

export default ClientForm
