import React from 'react'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import {Button} from "../../common/Button/Button";


const cx = classNames.bind(require('./styles.scss'))

const JobSection = () => {
    return (
        <div className={cx('job-section')}>
            <div className={cx('job-section__wrapper', 'container')}>
                <h2 className={cx('job-section__title')}>Хотите работать у нас?</h2>
                <div className={cx('job-section__content')}>
                    <p className={cx('job-section__text')}>
                        Нам всегда нужны талантливые люди, которые горят своим делом и готовы воплощать самые смелые
                        идеи :)
                    </p>
                    <Link to='/vacancies' className={cx('job-section__link')}>
                        Смотреть вакансии
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JobSection
