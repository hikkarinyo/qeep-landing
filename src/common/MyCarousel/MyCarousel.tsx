import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classNames from 'classnames'
import { SvgIcon } from '../SvgIcon/SvgIcon'
import { SliderProps } from '../types'
import { useMediaQuery } from '@mui/material'


const cx = classNames.bind(require('./styles.scss'))

interface ArrowsProps {
    className: string
    onClick?: () => void
}

const SampleNextArrow = (props: ArrowsProps) => {
    const { onClick, className } = props

    return (
        <button className={cx('nextButton', className)} onClick={onClick}>
            <SvgIcon src='/icon/arrow.svg' width='50'/>
        </button>
    )
}

const SamplePrevArrow = (props: ArrowsProps) => {
    const { onClick, className } = props
    return (
        <button
            className={cx('prevButton', className)}
            onClick={onClick}
        >
            <SvgIcon src='/icon/arrow.svg' width='50'/>
        </button>
    )
}

export const MyCarousel = ({ images, children, autoplay, media }: SliderProps) => {
    const mobile = useMediaQuery(`(max-width:${media}px)`)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: mobile ? 1 : 3,
        slidesToScroll: mobile ? 1 : 3,
        autoplay: autoplay,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow className='nextButton'/>,
        prevArrow: <SamplePrevArrow className='prevButton'/>,
    }

    return (
        <Slider {...settings}>
            {images
                ? images.map((image, index) => (
                    <img key={index} src={`${image}`} alt='menu'/>
                ))
                : React.Children.map(children, (child, index) => (
                        <div className={cx("sliderWrapper")} key={index}>{child}</div>
                    ))
            }
        </Slider>
    )
}
