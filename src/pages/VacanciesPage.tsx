import React, {useEffect, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css'

import {Loader} from '../common/Loader/Loader'
import BannerJob from '../components/BannerJob/BannerJob'
import ScrollToTopButton from '../common/ScrollToTopButton/ScrollToTopButton'
import WhyUs from '../components/WhyUs/WhyUs'
import OurVacancies from '../components/OurVacancies/OurVacancies'
import { ToastContainer } from 'react-toastify'

const VacanciesPage = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => {
            clearTimeout(timer)
        }

    }, [])

    return (
        <>
            {isLoading
                ? <Loader/>
                : <>
                    <BannerJob/>
                    <WhyUs/>
                    <OurVacancies/>
                    <ToastContainer autoClose={3000} />
                    <ScrollToTopButton/>
                </>
            }
        </>
    )
}

export default VacanciesPage
