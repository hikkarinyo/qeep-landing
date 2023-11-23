import classNames from "classnames"
import React from "react";
import {BlackFridayProps} from "../types";
import {SvgIcon} from "../SvgIcon/SvgIcon";


const cx = classNames.bind(require('./styles.scss'))

export const BlackFriday = ({ className }: BlackFridayProps) => (
    <div className={cx('BlackFriday__wrapper', className)}>
        <SvgIcon src={'/black_friday.svg'}/>
    </div>
)