import { CardProps } from "../types"
import classNames from "classnames"


const cx = classNames.bind(require('./styles.scss'))

export const Card = ({ className, children }: CardProps) => (
    <div className={cx('card', className)}>
        {children}
    </div>
);