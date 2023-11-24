import classNames from 'classnames'
import { Card } from '../../common/Card/Card'
import { MyCarousel } from '../../common/MyCarousel/MyCarousel'

const cx = classNames.bind(require('./styles.scss'))

interface TestimonialsProps {
    id: string
}

const Testimonials = (props: TestimonialsProps) => {
    const testimonials = [
        {
            id: 1,
            logo: '/images/png/testimonials/nyam-nyam/logo-nyam-nyam.png',
            text: 'Благодаря сотрудничеству с QEEP-Pro наша компания смогла оперативно запустить мобильное приложение еще в 2020 году. Пользуемся их услугами уже более 2-х лет, периодически модернизируя наш проект, все замечания и предложения были услышаны и реализованы. Техническая поддержка всегда решает возникшие проблемы и отвечает на вопросы даже в выходные дни. Работа над приложением еще продолжается, надеемся, что результаты и в дальнейшем будут такие же положительные. Рекомендуем к сотрудничеству!',
            photo: '/images/testimonials/nyam-nyam/author-nyam-nyam.png',
            fullName: 'Ардаев Инад Мусаеви',
            position: 'Директор компании Ням-Ням',
        },
        {
            id: 2,
            logo: '/images/testimonials/pizza-ru/logo-pizza-ru.png',
            text: 'Выражаю благодарность компании QEEP-Pro за отличный функционал, своевременную сдачу мобильного приложения и приемлемую стоимость работ. Команда QEEP-Pro своевременно реагирует на все просьбы доработки приложения и любой вопрос касательно функционала приложения. Спасибо QEEP-Pro за профессиональные качества, индивидуальный подход к клиентам и сплоченную командную работу.',
            photo: '/images/testimonials/pizza-ru/author-pizza-ru.png',
            fullName: 'Петруненко Марк Игоревич',
            position: 'Управляющий делами Pizza.ru',
        },
        {
            id: 3,
            logo: '/images/testimonials/vt/logo-vt.svg',
            text: 'Когда мне понадобилось протестировать гипотезу: а зайдёт ли мобильное приложение для заказа в моей нише, я находил самые дешевые решения для создания мобильных приложений — от 2 млн.рублей. Просто для теста такое явно не годилось. Когда я обратился в QEEP-Pro, мне сказали, что приложение будет доступно в App Store и Google Play уже через 2 дня, а запуститься стоило всего 30 т.р. Это просто сказка!',
            photo: '/images/testimonials/vt/author-vt.png',
            fullName: 'Павел Мамаев',
            position: 'Генеральный директор SUPPLEMENT.GROUP',
        },
    ]

    return (
        <section id={props.id} className={cx('testimonials')}>
            <div className={cx('testimonials__wrapper', 'container')}>
                <h1 className={cx('testimonials__title')}>Отзывы</h1>
                <div className={cx('testimonials__cards')}>
                    <MyCarousel media='1200' autoplay={false}>
                        {testimonials.map((testimonials) => (
                            <Card key={testimonials.id} className={cx('testimonials__card', 'card')}>
                                <div className={cx('card__logo')}>
                                    <img src={testimonials.logo} alt='Логотип'/>
                                </div>
                                <p>{testimonials.text}</p>
                                <div className={cx('card__testimonial-author')}>
                                    <div className={cx('card__photo')}>
                                        <img src={testimonials.photo} alt='Фото'/>
                                    </div>
                                    <div className={cx('card__text')}>
                                        <p className={cx('card__text-fullname')}>{testimonials.fullName}</p>
                                        <p className={cx('card__text-position')}>{testimonials.position}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                        </MyCarousel>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
