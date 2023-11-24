import React, { useState } from 'react'
import classNames from 'classnames'
import { Button } from '../../common/Button/Button'
import { Modal } from '../../common/Modal/Modal'
import Form from '../../common/Form/Form'
import { BlackFriday } from '../../common/BlackFriday/BlackFriday'


const cx = classNames.bind(require('./styles.scss'))

interface BannerProps {
    id: string
}

const Banner = (props: BannerProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <section id={props.id} className={cx('banner', 'container')}>
                <div className={cx('banner__wrapper')}>
                    <div className={cx('banner__wrapper-left')}>
                        <BlackFriday className={cx('banner__BlackFriday')} />
                        <p className={cx('banner__text')}>
                            Готовое приложение для вашей доставки за 2 дня
                        </p>
                        <p className={cx('banner__subText')}>
                            Скидка <span>30%</span> на месячное обслуживание с оплатой на любой период
                        </p>
                        <Button children={'Оставить заявку'} onClick={handleOpenModal}/>
                    </div>
                    <div className={cx('banner__wrapper-right')}>
                        <div className={cx('banner__video-overlay')}>
                            <video className={cx('banner__video')} autoPlay loop muted>
                                <source
                                    src='https://dl.dropboxusercontent.com/s/rk11werygt8m7zh/rebro-720.mp4?dl=0'
                                    type='video/mp4'
                                />
                            </video>
                        </div>
                        <img className={cx('banner__iphone')} src='/images/png/iphone.png' alt='iphone'/>
                    </div>
                    <p className={cx('banner__disclaimer')}>
                        *Черная пятница пройдёт с 24 по 30 ноября.
                    </p>
                </div>
            </section>
            <Modal isOpen={isOpen} onClose={handleCloseModal}><Form onCloseModal={handleCloseModal}/></Modal>
       </>
    )
}

export default Banner
