import React, { useState } from 'react'
import classNames from 'classnames'
import { Button } from '../../common/Button/Button'
import { Modal } from '../../common/Modal/Modal'
import CandidateForm from '../../common/Forms/CandidateForm'
import { SvgIcon } from '../../common/SvgIcon/SvgIcon'

const cx = classNames.bind(require('./styles.scss'))

const BannerJob = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    return (
        <section className={cx('about-job', 'container')}>
            <div className={cx('about-job__wrapper')}>
                <div className={cx('about-job__content')}>
                    <h1 className={cx('about-job__title')}>Хочешь работать с нами?</h1>
                    <p className={cx('about-job__text')}>
                        <strong>Мы</strong> – российская компания <strong>QEEP-Pro</strong>,
                        занимаемся <strong>разработкой</strong> собственной платформы
                        для быстрой и бюджетной разработки качественных и оптимизированных
                        <strong> мобильных приложений</strong> и <strong>веб-приложений</strong>.
                    </p>
                    <Button onClick={handleOpenModal}>Присоединиться к команде</Button>
                </div>
                <div className={cx('about-job__image')}>
                    <SvgIcon src='jobs/logo.png'/>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={handleCloseModal}><CandidateForm onCloseModal={handleCloseModal}/></Modal>
        </section>
    )
}

export default BannerJob
