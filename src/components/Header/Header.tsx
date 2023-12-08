import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { SvgIcon } from '../../common/SvgIcon/SvgIcon'


const cx = classNames.bind(require('./styles.scss'))

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    const navLinks = [
        { to: '#possibilities', text: 'Возможности' },
        { to: '#advantages', text: 'Преимущества' },
        { to: '#howItWorks', text: 'Как это работает' },
        { to: '#portfolio', text: 'Наши работы' },
        { to: '#calculator', text: 'Калькулятор' },
        { to: '#testimonials', text: 'Отзывы' },
    ]

    const handleScroll = () => {
        const scrollPosition = window.scrollY

        const newActiveSection = navLinks.find((link) => {
            const targetElement = document.querySelector(link.to) as HTMLElement
            if (targetElement) {
                const offsetTop = targetElement.offsetTop
                const offsetBottom = offsetTop + targetElement.offsetHeight

                return scrollPosition >= offsetTop && scrollPosition < offsetBottom
            }
            return false
        })

        if (newActiveSection && activeSection !== newActiveSection.to) {
            setActiveSection(newActiveSection.to)
        }
    }


    const toggleMenuMobile = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [isMobileMenuOpen, activeSection])

    return (
        <header className={cx('header', {mobile: isMobileMenuOpen})}>
            <div className={cx('headerWrapper', {mobile: isMobileMenuOpen})}>
                <div className={cx('headerInner')}>
                    <Link
                        className={cx('headerLinkLogo')}
                        to='/'
                        onClick={closeMobileMenu}
                    >
                        <SvgIcon className={cx('headerLogo')} src='/logo/logo-black.svg' width='50'/>
                    </Link>
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
                            to={'/'+link.to}
                            className={cx('headerNavLink', { active: activeSection === link.to })}
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
