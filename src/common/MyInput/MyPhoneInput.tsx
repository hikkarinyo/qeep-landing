import React from 'react'
import { PhoneInputProps } from '../types'
import classNames from 'classnames'
import { Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'

const cx = classNames.bind(require('./styles.scss'))

export const MyPhoneInput = ({label, mask, name, error, control, variant}: PhoneInputProps) => {
    return (
        <div>
            <Controller
                control={control}
                name={name}
                defaultValue={''}
                render={({field: {value, onChange}}) => (
                    <InputMask
                        className={cx(`${variant}`, {[`${variant}__error`]: error})}
                        mask={mask}
                        placeholder={label}
                        onChange={onChange}
                        value={value}
                    />
                )}
            />
            <span className={cx(`${variant}__message`, {[`${variant}__message-error`]: error})}>
            {error}
        </span>
        </div>
    )
}