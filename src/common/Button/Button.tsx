import { ButtonProps } from "../types"
import classNames from "classnames"


const cx = classNames.bind(require('./styles.scss'))

export const Button = ({ children, onClick, type, disabled }: ButtonProps) => (
    <button className={cx('button')} onClick={onClick} type={type} disabled={disabled}>
        {children}
    </button>
)