import classNames from 'classnames'
import MyStepper from '../../common/MyStepper/MyStepper'

const cx = classNames.bind(require('./styles.scss'))

interface WorkDescriptionProps {
    id: string
}

const WorkDescription = (props: WorkDescriptionProps) => {
    return (
        <section id={props.id} className={cx('work-description')}>
            <div  className={cx('container')}>
                <h1 className={cx('work-description__title')}>Как это работает</h1>
                <MyStepper/>
            </div>
        </section>
    )
}

export default WorkDescription
