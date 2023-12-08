import classNames from 'classnames'
import { SvgIcon } from '../../common/SvgIcon/SvgIcon'
import { Link } from 'react-router-dom'


const cx = classNames.bind(require('./styles.scss'))

const Footer = () => {
    return (
        <footer className={cx('footer')}>
                <nav className={cx('footer__wrapper', 'container')}>
                    <div className={cx('footer__wrapper-col')}>
                        <h5 className={cx('footer__title')}>Адрес</h5>
                        <p className={cx('footer__text')}>г. Томск, ул. Енисейская, д. 37, оф. 328</p>
                    </div>
                    <div className={cx('footer__wrapper-col')}>
                        <h5 className={cx('footer__title')}>Контакты</h5>
                        <p className={cx('footer__text')}>Телефон: <a className={cx('footer__link')}
                                                                      href='tel:+79917770591'>+7 (991) 777-05-91</a>
                        </p>
                        <p className={cx('footer__text')}>Email: <a className={cx('footer__link')}
                                                                    href='mailto:info@qeep.pro'>info@qeep.pro</a>
                        </p>
                    </div>
                    <div className={cx('footer__wrapper-col')}>
                        <h5 className={cx('footer__title')}>Информация</h5>
                        <Link className={cx('footer__link')} to='/vacancies'>Работа у нас</Link>
                        <a className={cx('footer__link')} href='/doc/privacy-policy.pdf'>
                            Политика конфиденциальности
                        </a>
                    </div>
                    <div className={cx('footer__wrapper-col')}>
                        <Link to='/' className={cx('footer__link-logo')}>
                            <SvgIcon src='/logo/logo-white.svg' width='70'/>
                        </Link>
                    </div>
                </nav>
        </footer>
    )
}

export default Footer
