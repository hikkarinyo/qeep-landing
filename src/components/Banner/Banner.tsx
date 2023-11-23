import React, { useState } from "react"
import classNames from "classnames"
import { Button } from "../../common/Button/Button"
import {Modal} from "../../common/Modal/Modal"
import Form from "../../common/Form/Form";
import {BlackFriday} from "../../common/BlackFriday/BlackFriday";


const cx = classNames.bind(require('./styles.scss'))

interface BannerProps {
    id: string;
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
                        {/*<img className={cx('banner__arrow')} src="/images/png/arrow.png" alt="iphone"/>*/}
                        <h1 className={cx('banner__title')}>Готовое приложение для вашей доставки за 2 дня</h1>
                        <p className={cx('banner__text')}>
                            Наши клиенты увеличивают свой доход на 10-25% уже через 3 месяца
                        </p>
                        <Button children={"Оставить заявку"} onClick={handleOpenModal}/>
                    </div>
                    <div className={cx('banner__wrapper-right')}>
                        <div className={cx('banner__video-overlay')}>
                            <video className={cx('banner__video')} autoPlay loop muted>
                                <source
                                    src="https://dl.dropboxusercontent.com/s/rk11werygt8m7zh/rebro-720.mp4?dl=0"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <img className={cx('banner__iphone')} src="/images/png/iphone.png" alt="iphone"/>
                    </div>
                    <p className={cx('banner__disclaimer')}>
                        *Рассчитать рост вашего дохода поможет наш финансовый аналитик
                    </p>
                </div>
            </section>
            <Modal isOpen={isOpen} onClose={handleCloseModal}><Form onCloseModal={handleCloseModal}/></Modal>
       </>
    )
}

export default Banner
