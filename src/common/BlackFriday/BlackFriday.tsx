import classNames from "classnames"
import React from "react";
import {BlackFridayProps} from "../types";


const cx = classNames.bind(require('./styles.scss'))

export const BlackFriday = ({ className }: BlackFridayProps) => (
    <div className={cx('BlackFriday__wrapper', className)}>
        <p className={cx('BlackFriday__title', 'BlackFriday__text')}>Black Friday</p>
        <p className={cx('BlackFriday__title', 'BlackFriday__percentage')}>30%</p>
    </div>
)