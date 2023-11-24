import classNames from 'classnames'
import { Card } from '../../common/Card/Card'
import { SvgIcon } from '../../common/SvgIcon/SvgIcon'


const cx = classNames.bind(require('./styles.scss'))

interface PossibilitiesProps {
    id: string
}

const Possibilities = (props: PossibilitiesProps) => {
    return (
        <section id={props.id} className={cx('possibilities', 'container')}>
            <h1 className={cx('possibilities__title')}>Возможности</h1>
            <div className={cx('possibilities__wrapper')}>
                <Card className={cx('card', 'card_center')}>
                    <SvgIcon src='/entrecote/pre-loader.png'/>
                </Card>
                <div className={cx('possibilities__col')}>
                    <Card className={cx('card')}>
                        <h1 className={cx('card__title')}>Быстрый запуск продаж</h1>
                        <p className={cx('card__description')}>
                            уже через 2 дня ваши клиенты смогут скачать приложение из App Store и Google Play
                        </p>
                    </Card>
                    <Card className={cx('card')}>
                        <h1 className={cx('card__title')}>Сайт</h1>
                        <p className={cx('card__description')}>два инструмента на одной платформе</p>
                        <SvgIcon className={cx('card__image')} src='/qeep-shop/notebook-catalog.png'/>
                    </Card>
                </div>
                <div className={cx('possibilities__col')}>
                    <Card className={cx('card', 'card_center')}>
                        <h1 className={cx('card__title')}>Кастомный дизайн</h1>
                        <SvgIcon className={cx('card__image')} src='/grilled-shawarma/contacts.png' width='282'/>
                    </Card>
                    <Card className={cx('card', 'card_center')}>
                        <SvgIcon className={cx('card__image')} src='/qeep-shop/notebook-modal.png'/>
                    </Card>
                </div>
                <Card className={cx('card', 'card_center')}>
                    <SvgIcon src='/integration/r-keeper.png' width='227'/>
                    <SvgIcon src='/integration/1c.png' width='133'/>
                    <SvgIcon src='/integration/iiko.png' width='128'/>
                </Card>
                <Card className={cx('card', 'card_long', 'card_center')}>
                    <h1 className={cx('card__title')}>Синхронизация со всеми популярными системами</h1>
                    <SvgIcon className={cx('card__image')} src='/qeep-pro/notebook-control-panel.png'/>
                </Card>
            </div>
        </section>
    )
}

export default Possibilities
