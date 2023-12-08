import classNames from 'classnames'
import { Card } from '../../common/Card/Card'
import { Link } from 'react-router-dom'

const cx = classNames.bind(require('./styles.scss'))

const vacanciesData = [
    {
        title: 'Менеджер по продажам',
        description: 'Отвечает за развитие и реализацию стратегий продаж, включая установление и поддержание отношений с клиентами.',
        link: 'manager',
    },
    {
        title: 'Стажер Backend-разработчик',
        description: 'Участвует в разработке backend-компонентов веб-приложений на Symfony под руководством опытных разработчиков.',
        link: 'backend',
    },
    {
        title: 'Стажер Frontend-разработчик',
        description: 'Разрабатывает пользовательский интерфейс для веб-приложений на React под руководством опытных разработчиков.',
        link: 'frontend',
    },
]

const OurVacancies = () => {
    return (
        <section className={cx('our-vacancies')}>
            <div className={cx('container')}>
            <h1 className={cx('our-vacancies__title')}>Наши вакансии</h1>
            <div className={cx('our-vacancies__cards')}>
                {vacanciesData.map((vacancy, index) => (
                    <Card key={index} className={cx('our-vacancies__card')}>
                        <h3 className={cx('our-vacancies__card-title')}>{vacancy.title}</h3>
                        <p className={cx('our-vacancies__card-description')}>{vacancy.description}</p>
                        <Link to={`/vacancies/${vacancy.link}`} className={cx('our-vacancies__card-link')}>Подробнее</Link>
                    </Card>
                ))}
            </div>
            </div>
        </section>
    )
}

export default OurVacancies
