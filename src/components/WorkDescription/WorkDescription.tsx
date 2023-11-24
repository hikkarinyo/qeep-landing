import classNames from 'classnames'
import { SvgIcon } from '../../common/SvgIcon/SvgIcon'

const cx = classNames.bind(require('./styles.scss'))

interface WorkDescriptionProps {
    id: string
}

const WorkDescription = (props: WorkDescriptionProps) => {
    return (
        /* TODO: переделать этот блок */
        <section id={props.id} className={cx('work-description')}>
            <div  className={cx('container')}>
                <h1 className={cx('work-description__title')}>Как это работает</h1>
            </div>
            <SvgIcon src='result.svg'/>
        </section>

    )
}

export default WorkDescription
