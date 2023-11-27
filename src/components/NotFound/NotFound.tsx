import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'


const cx = classNames.bind(require('./styles.scss'))

const NotFound = () => {
    return (
        <div className={cx('not-found')}>
            <div className={cx('not-found__wrapper','container')}>
                <h2 className={cx('not-found__title')}>404</h2>
                <p className={cx('not-found__sub-title')}>Упс... страница не найдена</p>
                <Link to='/' className={cx('not-found__link')}>Вернуться назад</Link>
            </div>
        </div>
    )
}

export default NotFound
