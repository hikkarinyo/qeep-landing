import React, { useEffect } from 'react'
import { ModalProps } from '../types'
import classNames from 'classnames'


const cx = classNames.bind(require('./styles.scss'))

export const Modal = ({isOpen, onClose, children}: ModalProps) => {
    const handleClose = () => {
        onClose()
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <div className={cx(isOpen ? 'modal open' : 'modal')} onClick={handleClose}>
            <button className='cross' onClick={handleClose}/>
            <div
                className={cx(isOpen ? 'modalContent open' : 'modalContent')}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}