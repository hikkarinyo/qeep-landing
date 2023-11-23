import classNames from "classnames"
import { SvgIcon } from "../../common/SvgIcon/SvgIcon"


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
                        <h5 className={cx('footer__title')}>Телефон</h5>
                        <a href="tel:+79917770591" className={cx('footer__text')}>+7 (991) 777-05-91</a>
                    </div>
                    <div className={cx('footer__wrapper-col')}>
                        <h5 className={cx('footer__title')}>Почта</h5>
                        <a href="mailto:info@qeep.pro" className={cx('footer__text')}>info@qeep.pro</a>
                    </div>
                    <div className={cx('footer__wrapper-col')}>
                        <SvgIcon src={"/logo/logo-white.svg"} width={"70"}/>
                    </div>
                </nav>
        </footer>
    )
}

export default Footer
