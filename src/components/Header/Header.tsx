import classNames from "classnames"
import { Link } from 'react-router-dom'
import { SvgIcon } from "../../common/SvgIcon/SvgIcon"
import Possibilities from "../Possibilities/Possibilities";
import {useEffect, useState} from "react";


const cx = classNames.bind(require('./styles.scss'))

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMenuMobile = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset
            if (scrollTop > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])

    return (
        <header className={cx('header', { mobile: isMobileMenuOpen })}>
            <div className={cx('header__wrapper', { mobile: isMobileMenuOpen })}>
                <div className={cx('header__inner')}>
                    <Link className={cx('header__link-logo')} to="/#" onClick={closeMobileMenu}>
                        <SvgIcon className={cx('header__logo')} src={"/logo/logo-black.svg"} width={"50"}/>
                    </Link>
                    <button className={cx('mobileMenuButton', {active: isMobileMenuOpen})} onClick={toggleMenuMobile}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <nav className={cx('header__nav', 'container', { mobile: isMobileMenuOpen })}>
                    <Link to="/#possibilities" className={cx('header__nav-link')}>Возможности</Link>
                    {/*<Link to="/#advantages" className={cx('header__nav-link')}>Преимущества</Link>*/}
                    {/*<Link to="/#workDescription" className={cx('header__nav-link')}>Как это работает</Link>*/}
                    <Link to="/#portfolio" className={cx('header__nav-link')}>Наши работы</Link>
                    <Link to="/#calculator" className={cx('header__nav-link')}>Калькулятор</Link>
                    <Link to="/#testimonials" className={cx('header__nav-link')}>Отзывы</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
