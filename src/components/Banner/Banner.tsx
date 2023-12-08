import React, { useState } from 'react'
import classNames from 'classnames'
import { Button } from '../../common/Button/Button'
import { Modal } from '../../common/Modal/Modal'
import ClientForm from '../../common/Forms/ClientForm'


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
                    <img className={cx('banner__arrow')} src='/images/arrow.png' alt='arrow'/>
                    <div className={cx('banner__wrapper-left')}>
                        <p className={cx('banner__title')}>
                            Готовое приложение для вашей доставки за 2 дня
                        </p>
                        <p className={cx('banner__text')}>
                            Наши клиенты увеличивают свой доход на 10-25%
                            уже через 3 месяца
                        </p>
                        <Button children={'Оставить заявку'} onClick={handleOpenModal}/>
                    </div>
                    <div className={cx('banner__wrapper-right')}>
                        <div className={cx('banner__video-overlay')}>
                            <video
                                className={cx('banner__video')}
                                autoPlay
                                loop
                                muted
                                poster='/images/rebro/poster.jpg'
                            >
                                <source src='/video/rebro-720.mp4' type='video/mp4'/>
                            </video>
                        </div>
                        <img className={cx('banner__iphone')} src='/images/rebro/pre-loader.png' alt='iphone'/>
                    </div>
                    <p className={cx('banner__disclaimer')}>
                        *Рассчитать рост вашего дохода поможет наш финансовый аналитик
                    </p>
                </div>
            </section>
            <Modal isOpen={isOpen} onClose={handleCloseModal}><ClientForm onCloseModal={handleCloseModal}/></Modal>
       </>
    )
}

export default Banner
