import React from 'react'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material'
import { MySliderProps } from '../types'
import classNames from 'classnames'


const cx = classNames.bind(require('./styles.scss'))

const CustomSlider = styled(Slider)({
    color: '#F6583E',
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#F6583E',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-rail': {
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        backgroundColor: '#fff',
        color: '#333',
        transformOrigin: 'bottom left',
    },
})

const MySlider = ({ label, min, max, step, onChange, defaultValue, value }: MySliderProps) => {
    const marks = [
        {
            value: min,
            label: `${min}`,
        },
        {
            value: max,
            label: `${max}`,
        },
    ]

    const handleChange = (event: Event, value: number | number[], activeThumb: number)  => {
        if (typeof value === 'number' && onChange) {
            onChange(value)
        }
    }

    return (
        <>
            <p className={cx('my-slider__label')}>{label}</p>
            <CustomSlider
                size='small'
                min={min}
                step={step}
                max={max}
                valueLabelDisplay='auto'
                marks={marks}
                onChange={handleChange}
                defaultValue={defaultValue}
                value={value}
            />
        </>
    )
}

export default MySlider
