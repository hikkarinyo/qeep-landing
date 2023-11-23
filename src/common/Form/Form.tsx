import classNames from "classnames"
import InputMask from "react-input-mask"
import {Button} from "../Button/Button"
import React, {useEffect, useState} from "react"
import {Controller, useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import Done from "../Done/Done";
import {FormProps} from "../types";


const cx = classNames.bind(require('./styles.scss'))

const schema = yup
    .object({
        name: yup.string().required('Обязательное поле'),
        phone: yup.string().required('Обязательное поле'),
        companyName: yup.string().required('Обязательное поле'),
        comment: yup.string(),
    })

const Form = ({onCloseModal}: FormProps) => {
    const {
        register, handleSubmit, formState: {errors},
        reset, control
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    })
    const [isDisabled, setIsDisabled] = useState(false)

    const submit = handleSubmit(async (data) => {
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('phone', data.phone)
        formData.append('companyName', data.companyName);
        formData.append('comment', `Компания "${data.companyName}" ${data.comment || ''}`)

        try {
            setIsDisabled(true)
            await fetch('https://demo.qeep.pro/process/application', {
                method: 'POST',
                body: formData
            })
            reset()
            onCloseModal()
        } catch (error) {
            console.log('Ошибка')
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
                <div>
                    {/*TODO: вынести input отдельно*/}
                    <input
                        className={cx('input', {'input__error': errors.name?.message})}
                        {...register("name")}
                        name={"name"}
                        placeholder={"Имя"}
                    />
                    <p className={cx('input__message', {'input__message-error': errors.name?.message})}>
                        {errors.name?.message}
                    </p>
                </div>
                <div>
                    <Controller
                        control={control}
                        name="phone"
                        defaultValue={""}
                        render={({field: {onChange, value}}) => (
                            <InputMask
                                className={cx('input', {'input__error': errors.phone?.message})}
                                mask="+7 (999) 999-99-99"
                                placeholder="Телефон"
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                    <p className={cx('input__message', {'input__message-error': errors.phone?.message})}>
                        {errors.phone?.message}
                    </p>
                </div>
                <div>
                    <input
                        className={cx('input', {'input__error': errors.companyName?.message})}
                        {...register("companyName")}
                        name={"companyName"}
                        placeholder={"Название компании"}
                    />
                    <p className={cx('input__message', {'input__message-error': errors.companyName?.message})}>
                        {errors.companyName?.message}
                    </p>
                </div>
                <input
                    className={cx('input')}
                    {...register("comment")}
                    name={"comment"}
                    placeholder={"Комментарий"}
                />
                <Button disabled={isDisabled} type="submit">Отправить</Button>
                <p className={cx('form__personal-information')}>
                    Нажимая на кнопку, вы даете согласие на обработку
                    <a href='#' className={cx('form__link')} target="_blank">персональных данных</a>
                </p>
            </form>
        </>
    )
}

export default Form
