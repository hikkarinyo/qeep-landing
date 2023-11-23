import classNames from "classnames"
import React from "react"
import {SvgIcon} from "../SvgIcon/SvgIcon";


const cx = classNames.bind(require('./styles.scss'))

const Done = () => {

    return (
        <div className={cx('done')}>
            <SvgIcon src={'done.svg'}/>
            <h1 className={cx('done__title')}>Ваша заявка успешно отправлена</h1>
        </div>
    )
}

export default Done
