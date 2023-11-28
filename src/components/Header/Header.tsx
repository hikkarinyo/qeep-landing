import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { SvgIcon } from '../../common/SvgIcon/SvgIcon'


const cx = classNames.bind(require('./styles.scss'))

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navLinks = [
        { to: '/#possibilities', text: 'Возможности' },
        // Блоки пока недоделаны
        { to: '/#advantages', text: 'Преимущества' },
        // { to: '/#workDescription', text: 'Как это работает' },
        { to: '/#portfolio', text: 'Наши работы' },
        { to: '/#calculator', text: 'Калькулятор' },
        { to: '/#testimonials', text: 'Отзывы' },
    ]

    const toggleMenuMobile = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])

    return (
        <header className={cx('header', {mobile: isMobileMenuOpen})}>
            <div className={cx('headerWrapper', {mobile: isMobileMenuOpen})}>
                <div className={cx('headerInner')}>
                    <div
                        className={cx('headerLinkLogo')}
                        onClick={() => {
                            closeMobileMenu()
                            scrollToTop()
                        }}
                    >
                        <SvgIcon className={cx('headerLogo')} src='/logo/logo-black.svg' width='50'/>
                    </div>
                    <button
                        className={cx('mobileMenuButton', {active: isMobileMenuOpen})}
                        onClick={toggleMenuMobile}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <nav className={cx('headerNav', 'container', {mobile: isMobileMenuOpen})}>
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            className={cx('headerNavLink')}
                            onClick={closeMobileMenu}
                        >
                            {link.text}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header
