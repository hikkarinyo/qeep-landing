import classNames from "classnames"
import { ContainerProps } from "../types"


const cx = classNames.bind(require('./styles.scss'))

export const Container = ({ children } : ContainerProps) => (
    <div className={cx('container')}>
        {children}
    </div>
)