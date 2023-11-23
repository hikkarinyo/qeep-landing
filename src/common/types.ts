import React, {ChangeEventHandler} from "react"

export interface SvgIconProps {
    src: string
    width?: string
    height?: string
    className?: string
}

export interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    type?: "button" | "submit" | "reset"
    disabled?: boolean
}

export interface ContainerProps {
    children: React.ReactNode
}

export interface CardProps {
    children: React.ReactNode
    className?: string
}
export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export interface MySliderProps {
    max: number
    min: number
    step: number
    onChange?: (value: number) => void
    defaultValue?: number
    value?: number
    label?: string
}

export interface SliderProps {
    images?: string[]
    children?: React.ReactNode
    autoplay?: boolean
    media: string
}

export interface FormProps {
    onCloseModal: () => void
}

export interface BlackFridayProps {
    className?: string
}
