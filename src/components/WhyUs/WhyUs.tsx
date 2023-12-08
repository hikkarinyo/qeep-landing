import classNames from 'classnames'
import { SvgIcon } from '../../common/SvgIcon/SvgIcon'
import { Card } from '../../common/Card/Card'

const cx = classNames.bind(require('./styles.scss'))

interface WhyUsCardProps {
    icon: string
    title: string
    description: string
}

const cardContent = [
    {
        title: 'Обучение за счет компании',
        description:
            'Мы предоставляем обучение за счет компании на период адаптации и в будущем. Благодаря работе с нами вы приобретёте полезные навыки и новый опыт, которые смогут помочь в будущем.',
        icon: '/icon/education-icon.svg',
    },
    {
        title: 'Дружный коллектив',
        description:
            'Наш дружный коллектив знает как сложно новичкам, поэтому каждый работник готов помочь и подсказать в трудную минуту.',
        icon: '/icon/friendship-icon.svg',
    },
    {
        title: 'Праздники!',
        description: 'Мы любим устраивать корпоративные праздники, вместе играем в настолки и ходим на квизы!',
        icon: '/icon/game-icon.svg',
    },
    {
        title: 'Вкусняшки',
        description:
            'В нашем офисе вы сможете наслаждаться не только интеллектуальными вызовами, но и уютными перерывами с вкусняшками.',
        icon: '/icon/cookies-icon.svg',
    },
    {
        title: 'Гибридный график',
        description: 'Гибридный график позволяет вам выбирать, когда вам удобнее работать из офиса, а когда — из дома.',
        icon: '/icon/time-icon.svg',
    },
]

const WhyUsCard = ({icon, title, description}: WhyUsCardProps) => (
    <Card className={cx('why-us__card')}>
        <div className={cx('why-us__card-icon')}>
            <SvgIcon src={icon} height='80'/>
        </div>
        <div className={cx('why-us__card-text')}>
            <h3 className={cx('why-us__card-title')}>{title}</h3>
            <p className={cx('why-us__card-description')}>{description}</p>
        </div>
    </Card>
)

const WhyUs = () => {
    const firstSectionData = cardContent.slice(0, 3)
    const secondSectionData = cardContent.slice(-2)
    return (
        <section className={cx('why-us')}>
            <div className={cx('container')}>
                <h1 className={cx('why-us__title')}>Почему мы</h1>
                <div className={cx('why-us__cards--3columns')}>
                    {firstSectionData.map((item, index) => (
                        <WhyUsCard key={index} {...item} />
                    ))}
                </div>
                <div className={cx('why-us__cards--2columns')}>
                    {secondSectionData.map((item, index) => (
                        <WhyUsCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyUs
