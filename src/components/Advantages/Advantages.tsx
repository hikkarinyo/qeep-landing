import classNames from 'classnames'
import {Card} from "../../common/Card/Card";
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";

const cx = classNames.bind(require('./styles.scss'))

interface AdvantagesProps {
    id: string
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
];

const Advantages = (props: AdvantagesProps) => {
    // Slice the array to get the first three cards for the first section
    const firstSectionData = AdvantagesData.slice(0, 3);
    // Slice the array to get the last two cards for the second section
    const secondSectionData = AdvantagesData.slice(-2);

    return (
        <section id={props.id} className={cx('advantages')}>
            <div className={cx('container')}>
                <h1 className={cx('advantages__title')}>Зачем мы?</h1>

                {/* First Section */}
                <div className={cx('advantages__cards')}>
                    {firstSectionData.map((advantage, index) => (
                        <Card key={index} className={cx('advantages__card')}>
                            <SvgIcon src={advantage.icon} width='42' />
                            <h1 className={cx('advantages__card-title')}>{advantage.title}</h1>
                            <ul className={cx('advantages__card-list')}>
                                {advantage.listItems.map((item, itemIndex) => (
                                    <li key={itemIndex} className={cx('advantages__card-list-item')}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>

                {/* Second Section */}
                <div className={cx('advantages__cards-two')}>
                    {secondSectionData.map((advantage, index) => (
                        <Card key={index} className={cx('advantages__card')}>
                            <SvgIcon src={advantage.icon} width='42' />
                            <h1 className={cx('advantages__card-title')}>{advantage.title}</h1>
                            <ul className={cx('advantages__card-list')}>
                                {advantage.listItems.map((item, itemIndex) => (
                                    <li key={itemIndex} className={cx('advantages__card-list-item')}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages
