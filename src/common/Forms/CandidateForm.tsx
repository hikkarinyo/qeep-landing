import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Button } from '../Button/Button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProps } from '../types'
import { toast, Slide } from 'react-toastify'
import { MyInput } from '../MyInput/MyInput'
import { sendApplication } from '../../api'
import { schemaCandidateForm } from '../../helpers/validation'
import { MyTextarea } from '../MyTextarea/MyTextarea'


const cx = classNames.bind(require('./styles.scss'))

const CandidateForm = ({onCloseModal}: FormProps) => {
    const {
        register, handleSubmit, formState: {errors},
        reset, control
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schemaCandidateForm),
    })
    const [isDisabled, setIsDisabled] = useState(false)

    const submit = handleSubmit(async (data) => {
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('phone', data.email)
        formData.append('comment',
            `
            telegram: '${data.telegram || ''}'.
            Резюме: ${data.comment}.
            `)

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
            <h1 className={cx('form__title')}>Откликнуться на вакансию</h1>
            <MyInput
                label='Имя'
                name='name'
                register={register}
                error={errors.name?.message}
                variant='my-input'
            />
            <MyInput
                label='Email'
                name='email'
                register={register}
                error={errors.email?.message}
                variant='my-input'
            />
            <MyInput
                label='Ник в Telegram'
                name='telegram'
                register={register}
                error={errors.telegram?.message}
                variant='my-input'
            />
            <MyTextarea
                label='Расскажите о себе или приложите ссылку на резюме'
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

export default CandidateForm
