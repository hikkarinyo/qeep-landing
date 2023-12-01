import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { Button } from '../../common/Button/Button'
import { SvgIcon } from '../../common/SvgIcon/SvgIcon'
import Form from '../../common/Form/Form'
import { Modal } from '../../common/Modal/Modal'
import { StepIconProps, styled, useMediaQuery } from '@mui/material'
import { useInView } from 'react-intersection-observer'


const cx = classNames.bind(require('./styles.scss'))
const gradient =
    'linear-gradient( 136deg, rgb(227, 60, 30) 0%, rgb(227, 60, 30) 50%, rgb(227, 60, 30) 100%)'

const steps = [
    {
        label: 'Данные',
        description: 'На этом первом шаге вы передаете нам всю необходимую информацию и данные. Это может включать в себя доступ к вашим товарам в iiko или r_keeper.',
        image: '/stepper/puzzle.svg'
    },
    {
        label: 'Каталог',
        description: 'После получения ваших данных мы приступаем к синхронизации каталога. Этот процесс включает в себя организацию и структурирование информации о товарах из вашего каталога.',
        image: '/stepper/analysis.svg'
    },
    {
        label: 'Приложение',
        description: 'На основе предоставленных данных и структурированного каталога мы начинаем процесс генерации вашего уникального брендированного приложения.',
        image: '/stepper/mobile-app.svg'
    },
    {
        label: 'Публикация',
        description: 'Как только ваше приложение будет готово, мы переходим к его публикации. Этот шаг включает в себя размещение приложения в ключевых магазинах приложений - AppStore для iOS и Google Play для Android, обеспечивая доступность для широкой аудитории.',
        image: '/stepper/app-store.svg'
    },
    {
        label: 'Реклама',
        description: 'Чтобы увеличить охват и привлечь больше пользователей, мы предоставляем услуги по продвижению вашего приложения. Это включает в себя стратегии маркетинга и рекламы, которые помогут увеличить узнаваемость вашего приложения и привлечь потенциальных клиентов.',
        image: '/stepper/advertising.svg'
    },
    {
        label: 'Заказы',
        description: 'Ваше приложение теперь активно, и клиенты могут делать заказы непосредственно через него. Удобный интерфейс и простота использования способствуют повышению продаж и улучшению взаимодействия с клиентами.',
        image: '/stepper/orders.svg'
    },
    {
        label: 'Прибыль',
        description: 'С увеличением числа заказов через приложение вы начинаете видеть рост прибыли. Эффективное приложение не только упрощает процесс покупки для ваших клиентов, но и способствует расширению вашего бизнеса.',
        image: '/stepper/profit.svg'
    },
]

const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean, active?: boolean }
}>(({theme, ownerState}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    color: '#fff',
    fontWeight: 700,
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage: gradient,
        boxShadow: '0 4px 10px 0 rgba(0, 0, 0, .25)',
    }),
    ...(ownerState.completed && {
        backgroundImage: gradient,
    }),
}))

function ColorlibStepIcon(props: StepIconProps) {
    const {active, completed, className, icon} = props

    return (
        <ColorlibStepIconRoot ownerState={{completed, active}} className={className}>{icon}</ColorlibStepIconRoot>
    )
}


const MyStepper = () => {
    const notebook = useMediaQuery(`(max-width:1000px)`)
    const mobile = useMediaQuery(`(max-width:700px)`)
    const [activeStep, setActiveStep] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        if (inView) {
            const interval = setInterval(() => {
                if (activeStep <= steps.length - 1) {
                    handleNext()
                }
            }, 3000)

            return () => clearInterval(interval)
        }
    }, [activeStep, inView])

    return (
        <>
            <div ref={ref} className={cx('my-stepper')}>
                <div className={cx('my-stepper__wrapper')}>
                    <Stepper activeStep={activeStep} orientation={notebook ? 'vertical' : 'horizontal'}>
                        {steps.map((step, index) => (
                            <Step key={index}>
                                <StepLabel StepIconComponent={(props) => <ColorlibStepIcon {...props} icon={index + 1} />}>
                                    {!mobile && step.label}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep !== steps.length ? (
                        <div className={cx('my-stepper__content')}>
                            <div className={cx('my-stepper__wrapper-content')}>
                                <h3 className={cx('my-stepper__title')}>{steps[activeStep].label}</h3>
                                <p className={cx('my-stepper__description')}>{steps[activeStep].description}</p>
                            </div>
                            <div className={cx('my-stepper__image')}>
                                <SvgIcon src={steps[activeStep].image} height="500" width="500" />
                            </div>
                        </div>
                    ) : (
                        <div className={cx('my-stepper__content')}>
                            <div className={cx('my-stepper__wrapper-content')}>
                                <p className={cx('my-stepper__finall-text')}>
                                    Готовы начать улучшение своего бизнеса с нашими инновационными решениями?
                                </p>
                                <Button onClick={handleOpenModal}>Оставить заявку</Button>
                            </div>
                            <div className={cx('my-stepper__image')}>
                                <SvgIcon src={'profit.svg'} height="500" width="500" />
                            </div>
                        </div>
                    )}
                </div>
                <div className={cx('my-stepper__btns')}>
                    <Button disabled={activeStep === 0} onClick={handleBack}>
                        Назад
                    </Button>
                    {activeStep === steps.length ? (
                        <Button onClick={handleReset}>Сбросить</Button>
                    ) : (
                        <Button onClick={handleNext}>Дальше</Button>
                    )}
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <Form onCloseModal={handleCloseModal} />
            </Modal>
        </>
    )
}

export default MyStepper
