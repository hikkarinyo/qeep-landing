import classNames from "classnames"
import { Card } from "../../common/Card/Card"

const cx = classNames.bind(require('./styles.scss'))

interface BenefitProps {
    id: string;
}

const Benefit = (props: BenefitProps) => {
    return (
        <section id={props.id} className={cx('benefit')}>
            <div className={cx('benefit__wrapper', 'container')}>
                <h1 className={cx('benefit__title')}>Выгода при работе с приложением</h1>
                <div className={cx('benefit__cards')}>
                    <Card className={cx('benefit__card')}>
                        <img className={cx('benefit__card-icon')} src="/images/png/card.png" alt="card"/>
                        <h1 className={cx('benefit__card-title')}>Рост заказов</h1>
                        <p className={cx('benefit__card-description')}>
                            Увеличивается прибыль с заказов на доставку в мобильном приложении на 25%
                        </p>
                    </Card>
                    <Card className={cx('benefit__card')}>
                        <img className={cx('benefit__card-icon')} src="/images/png/money.png" alt="money"/>
                        <h1 className={cx('benefit__card-title')}>Рост выручки</h1>
                        <p className={cx('benefit__card-description')}>
                            Выручка наших клиентов в среднем вырастает на 12-18%, даже если до этого они сотрудничали с
                            агрегаторами
                        </p>
                    </Card>
                    <Card className={cx('benefit__card')}>
                        <img className={cx('benefit__card-icon')} src="/images/png/people.png" alt="people"/>
                        <h1 className={cx('benefit__card-title')}>Курс на молодёжь</h1>
                        <p className={cx('benefit__card-description')}>
                            Более 80% молодёжи предпочитают использовать смартфон для заказа еды
                        </p>
                    </Card>
                    <Card className={cx('benefit__card')}>
                        <img className={cx('benefit__card-icon')} src="/images/png/chart.png" alt="chart"/>
                        <h1 className={cx('benefit__card-title')}>Увеличение рентабельности</h1>
                        <p className={cx('benefit__card-description')}>
                            До 60% заказов будут приходить с помощью собственного мобильного приложения уже через
                            3 месяца
                        </p>
                    </Card>
                </div>
            </div>
        </section>

    )
}

export default Benefit
