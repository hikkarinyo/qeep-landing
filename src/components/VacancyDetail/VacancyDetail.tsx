import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../common/Button/Button'
import { Card } from '../../common/Card/Card'
import { SvgIcon } from '../../common/SvgIcon/SvgIcon'
import CandidateForm from '../../common/Forms/CandidateForm'
import NotFound from '../NotFound/NotFound'
import vacanciesData from './data/vacancies'
import classNames from 'classnames'

const cx = classNames.bind(require('./styles.scss'))

const VacancyDetails = () => {
    const {name} = useParams()
    const vacancy = vacanciesData.find((v) => v.id === name)
    const formRef = useRef<HTMLDivElement | null>(null)

    if (!vacancy) {
        return <NotFound/>
    }

    const handleScrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className={cx('vacancy-details', 'container')}>
            <div className={cx('vacancy-details__wrapper')}>
                <h1 className={cx('vacancy-details__title')}>
                    {vacancy?.position_title}
                </h1>
                <div className={cx('vacancy-details__task')}>
                    <div className={cx('vacancy-details__task-wrapper')}>
                        <div className={cx('vacancy-details__task-inner')}>
                            <Card className={cx('vacancy-details__card')}>
                                <h2>Что вы будете делать</h2>
                                <ul className={cx('vacancy-details__list')}>
                                    {vacancy?.tasks?.map((task, index) => (
                                        <li className={cx('vacancy-details__list-item')} key={index}>
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                            <Button onClick={handleScrollToForm}>Откликнуться</Button>
                        </div>
                        <div className={cx('vacancy-details__image')}>
                            <SvgIcon src={`${vacancy?.image}`}/>
                        </div>
                    </div>
                </div>
                <div className={cx('vacancy-details__requirement')}>
                    <Card className={cx('vacancy-details__card')}>
                        <h2 className={cx('vacancy-details__card-title')}>Мы ждем от вас</h2>
                        <ul className={cx('vacancy-details__list')}>
                            {vacancy?.requirements?.map((requirement, index) => (
                                <li className={cx('vacancy-details__list-item')} key={index}>
                                    {requirement}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
                <div className={cx('vacancy-details__conditions')}>
                    <Card className={cx('vacancy-details__card')}>
                        <h2 className={cx('vacancy-details__card-title')}>Мы предлагаем</h2>
                        <ul className={cx('vacancy-details__list')}>
                            {vacancy?.conditions?.map((condition, index) => (
                                <li className={cx('vacancy-details__list-item')} key={index}>
                                    {condition}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
                <div className={cx('vacancy-details__form')} ref={formRef}>
                    <div className={cx('vacancy-details__form-wrapper-text')}>
                        <h3 className={cx('vacancy-details__form-title')}>
                            Мы молодая команда творческих людей
                        </h3>
                        <p className={cx('vacancy-details__form-text')}>
                            Это вдвойне круто! Мы помогаем людям удобно заказывать
                            доставку в любимых заведениях, а также увеличиваем выручку
                            самих заведений за счет большего числа заказов. Мы хотим
                            сделать удобным заказ еды для всей России и стран СНГ.
                            Вливайся в наши ряды и вместе сделаем этот мир лучше!
                        </p>
                    </div>
                    <Card className={cx('vacancy-details__card_form', 'vacancy-details__card')}>
                        <CandidateForm/>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default VacancyDetails
