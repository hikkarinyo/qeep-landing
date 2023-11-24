import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { SvgIcon } from '../../common/SvgIcon/SvgIcon'

const cx = classNames.bind(require('./styles.scss'))

const AppTabs = () => {
    const [activeTab, setActiveTab] = useState(0)

    const handleTabClick = (index: number) => {
        setActiveTab(index)
    }

    const numTabs = 5

    const colors = [
        '#F1F1F1', '#EBE6E6', '#8BC5B6', '#EF4618', '#333333',
        '#FAFAFA', '#DADEDA', '#EF8B18', '#166D97', '#212121'
    ]

    const tabTitles = [
        'Возвращайте клиентов бесплатно',
        'Не парьтесь с кривыми интеграциями',
        'Управляйте одним тапом',
        'Отличайтесь от других',
        'Получите сайт в подарок',
    ]

    const tabContents = [
        [
            { icon: '/icon/promotion-icon.svg', text: 'Акции' },
            { icon: '/icon/bonus-icon.svg', text: 'Бонусная система' },
            { icon: '/icon/mail-list-icon.svg', text: 'Адресная рассылка' },
            { icon: '/icon/cupon-icon.svg', text: 'Промокоды' },
            { icon: '/icon/notification-icon.svg', text: 'Push-уведомления' },
        ],
        [
            { icon: '/icon/modifiers-icon.svg', text: 'Модификаторы' },
            { icon: '/icon/stop-list-icon.svg', text: 'Регионы доставки' },
            { icon: '/icon/car-icon.svg', text: 'Регионы доставки' },
        ],
        [
            { icon: '/icon/intuitive-controls-icon.svg', text: 'Интуитивное управление' },
            { icon: '/icon/settings-access-icon.svg', text: 'Настройки доступа' },
            { icon: '/icon/tabs-icon.svg', text: 'Дашборд с аналитикой' },
        ],
        [
            { icon: '/icon/color-icon.svg', text: 'Дизайн в цветах бренда' },
            { icon: '/icon/several-templates-icon.svg', text: 'Несколько шаблонов' },
        ],
        [
            { icon: '/icon/instruments-icon.svg', text: 'Два инструмента' },
            { icon: '/icon/site-icon.svg', text: 'Одна платформа' },
            { icon: '/icon/one-design-icon.svg', text: 'Один дизайн' },
            { icon: '/icon/full-synchronization-icon.svg', text: 'Полная синхронизация' },
        ],
    ]

    const tabImages: (string)[] = [
        '/qeep-shop/notebook-loyalty-program.webp',
        '/qeep-pro/notebook-delivery-region.svg',
        '/qeep-pro/notebook-delivery-intervals.svg',
        '',
        '/qeep-shop/notebook-slider.svg',
    ]

    const buttonIcons = [
        '/icon/people-icon.svg',
        '/icon/integration-icon.svg',
        '/icon/tabs-icon.svg',
        '/icon/color-icon.svg',
        '/icon/site-icon.svg',
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTab((prevTab) => (prevTab + 1) % numTabs)
        }, 5000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <section id='your-id' className={cx('app-tabs')}>
            <div className={cx('app-tabs__wrapper', 'container')}>
                <div className={cx('app-tabs__btns')}>
                    {Array.from({ length: numTabs }).map((_, index) => (
                        <button
                            key={index}
                            className={cx('tab-button', { active: activeTab === index })}
                            onClick={() => handleTabClick(index)}
                        >
                            <SvgIcon src={buttonIcons[index]} />
                            {tabTitles[index]}
                        </button>
                    ))}
                </div>
                <div className={cx('app-tabs__contents')}>
                    {Array.from({ length: numTabs }).map((_, index) => (
                        <div
                            key={index}
                            className={cx('tab-content', 'slide-in', { active: activeTab === index })}
                        >
                            <h1 className={cx('content__title')}>{tabTitles[index]}</h1>
                            <div className={cx('content__wrapper-col')}>
                                <ul className={cx('content__list-grid')}>
                                    {tabContents[index].map((item, idx) => (
                                        <li key={idx} className={cx('content__list-item')}>
                                            <SvgIcon src={item.icon} width={'28'} />
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                                {tabImages[index] !== '' ? (
                                    <div className={cx('content__img')}>
                                        <SvgIcon src={tabImages[index]}/>
                                    </div>
                                ) : (
                                    <div className={cx('content__colors-list')}>
                                        {colors.map((color, index) => (
                                            <div
                                                key={index}
                                                className={cx('content__colors-item')}
                                                style={{backgroundColor: color}}
                                            />
                                        ))}
                                    </div>

                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AppTabs
