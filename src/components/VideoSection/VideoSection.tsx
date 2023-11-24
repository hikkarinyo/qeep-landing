import React, { useState } from 'react'
import classNames from 'classnames'
import { Modal } from '../../common/Modal/Modal'
import { Button } from '../../common/Button/Button'
import Form from '../../common/Form/Form'

const cx = classNames.bind(require('./styles.scss'))

const VideoSection = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <section className={cx('video-section')}>
                <div className={cx('container', 'video-section__wrapper')}>
                    <iframe
                        width='100%' height='315'
                        src='https://www.youtube.com/embed/OLCZhDFgej8?si=pL4IQasakf9igXLu'
                        title='YouTube video player' frameBorder='0'
                        allow='accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share'
                        allowFullScreen
                    >
                    </iframe>
                    <div className={cx('video-section__action')}>
                        <h1 className={cx('video-section__title')}>
                            Мы зарабатываем тогда, когда зарабатывают наши клиенты!
                        </h1>
                        <Button children='Оставить заявку' onClick={handleOpenModal}/>
                    </div>
                </div>
            </section>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <Form onCloseModal={handleCloseModal}/>
            </Modal>
        </>
    )
}

export default VideoSection
