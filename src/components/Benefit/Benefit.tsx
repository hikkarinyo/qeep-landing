import classNames from 'classnames'
import { Card } from '../../common/Card/Card'
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";

const cx = classNames.bind(require('./styles.scss'))

interface BenefitProps {
    id: string
}

const Benefit = (props: BenefitProps) => {
    const benefitCards = [
        {
            iconSrc: '/icon/cart-icon.svg',
            title: 'Рост заказов',
            description: 'Увеличивается прибыль с заказов на доставку в мобильном приложении на 25%',
        },
        {
            iconSrc: '/icon/money-icon.svg',
            title: 'Рост выручки',
            description: 'Выручка наших клиентов в среднем вырастает на 12-18%, даже если до этого они сотрудничали с агрегаторами',
        },
        {
            iconSrc: '/icon/people-icon.svg',
            title: 'Курс на молодёжь',
            description: 'Более 80% молодёжи предпочитают использовать смартфон для заказа еды',
        },
        {
            iconSrc: '/icon/chart-icon.svg',
            title: 'Увеличение рентабельности',
            description: 'До 60% заказов будут приходить с помощью собственного мобильного приложения уже через 3 месяца',
        },
    ]

    return (
        <section id={props.id} className={cx('benefit')}>
            <div className={cx('benefit__wrapper', 'container')}>
                <h1 className={cx('benefit__title')}>Выгода при работе с приложением</h1>
                <div className={cx('benefit__cards')}>
                    {benefitCards.map((card, index) => (
                        <Card key={index} className={cx('benefit__card')}>
                            <SvgIcon className={cx('benefit__card-icon')} src={card.iconSrc}/>
                            <h1 className={cx('benefit__card-title')}>{card.title}</h1>
                            <p className={cx('benefit__card-description')}>{card.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Benefit
