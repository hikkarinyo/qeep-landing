import classNames from 'classnames'
import { Card } from '../../common/Card/Card'
import { SvgIcon } from '../../common/SvgIcon/SvgIcon'

const cx = classNames.bind(require('./styles.scss'))

interface AdvantagesProps {
    id: string
}

interface AdvantageCardProps {
    icon: string
    title: string
    listItems: string[]
}

const AdvantagesData = [
    {
        title: 'Возвращайте клиентов бесплатно',
        icon: '/icon/primary-people-icon.svg',
        listItems: ['Акции', 'Промокоды', 'Бонусная система', 'Push-уведомления', 'Адресная рассылка']
    },
    {
        title: 'Не парьтесь с кривыми интеграциями',
        icon: '/icon/primary-integration-icon.svg',
        listItems: ['Модификаторы', 'Регионы доставки', 'Стоп-лит']
    },
    {
        title: 'Управляйте одним тапом',
        icon: '/icon/primary-several-templates-icon.svg',
        listItems: ['Интуитивное управление', 'Настройки доступ', 'Дашборд с аналитикой']
    },
    {
        title: 'Отличайтесь от других',
        icon: '/icon/primary-color-icon.svg',
        listItems: ['Дизайн в цветах бренда', 'Несколько шаблонов']
    },
    {
        title: 'Получите сайт в подарок',
        icon: '/icon/primary-site-icon.svg',
        listItems: ['Два инструмента', 'Один дизайн', 'Одна платформа', 'Полная синхронизация']
    }
]

const AdvantageCard = ({ icon, title, listItems }: AdvantageCardProps) => (
    <Card className={cx('advantages__card')}>
        <SvgIcon src={icon} width='42' />
        <h1 className={cx('advantages__card-title')}>{title}</h1>
        <ul className={cx('advantages__card-list')}>
            {listItems.map((item, index) => (
                <li key={index} className={cx('advantages__card-list-item')}>
                    {item}
                </li>
            ))}
        </ul>
    </Card>
)

const Advantages = (props: AdvantagesProps) => {
    const firstSectionData = AdvantagesData.slice(0, 3)
    const secondSectionData = AdvantagesData.slice(-2)

    return (
        <section id={props.id} className={cx('advantages')}>
            <div className={cx('container')}>
                <h1 className={cx('advantages__title')}>Почему мы?</h1>
                <div className={cx('advantages__cards--3columns')}>
                    {firstSectionData.map((advantage, index) => (
                        <AdvantageCard key={index} {...advantage} />
                    ))}
                </div>
                <div className={cx('advantages__cards--2columns')}>
                    {secondSectionData.map((advantage, index) => (
                        <AdvantageCard key={index} {...advantage} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Advantages
