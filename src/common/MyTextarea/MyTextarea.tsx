import React from 'react'
import { TextareaProps } from '../types'
import classNames from 'classnames'


const cx = classNames.bind(require('./styles.scss'))

export const MyTextarea = ({value, label, name, register, error, onChange, variant}: TextareaProps) => {

    return (
        <div>
            <textarea
                className={cx(`${variant}`, {[`${variant}__error`]: error})}
                {...register(name)}
                name={name}
                placeholder={label}
                value={value}
                onChange={onChange}
            />
            <span className={cx(`${variant}__message`, {[`${variant}__message-error`]:error})}>
                {error}
            </span>
        </div>
    )
}
