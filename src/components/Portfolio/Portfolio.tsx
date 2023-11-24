import classNames from 'classnames'
import { MyCarousel } from '../../common/MyCarousel/MyCarousel'

const cx = classNames.bind(require('./styles.scss'))

interface PortfolioProps {
    id: string
}

const Portfolio = (props: PortfolioProps) => {
    const images = [
        'images/nyam-nyam/catalog.webp',
        'images/nyam-nyam/contacts.webp',
        'images/nyam-nyam/card-product.webp',
        'images/donermaster/catalog.webp',
        'images/donermaster/contacts.webp',
        'images/donermaster/card-product.webp',
        'images/vitamine-trade/catalog.webp',
        'images/vitamine-trade/contacts.webp',
        'images/vitamine-trade/card-product.webp',
    ]
    return (
        <section id={props.id} className={cx('portfolio')}>
            <div className={cx('portfolio__wrapper', 'container')}>
                <h1 className={cx('portfolio__title')}>Наши работы</h1>
                <MyCarousel media='425' autoplay={true} images={images}/>
            </div>
        </section>

    )
}

export default Portfolio
