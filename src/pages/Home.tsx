import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Banner from '../components/Banner/Banner'
import Benefit from '../components/Benefit/Benefit'
import Possibilities from '../components/Possibilities/Possibilities'
import Calculator from '../components/Calculator/Calculator'
import Testimonials from '../components/Testimonials/Testimonials'
import Portfolio from '../components/Portfolio/Portfolio'
import VideoSection from '../components/VideoSection/VideoSection'
import { Loader } from '../common/Loader/Loader'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Advantages from '../components/Advantages/Advantages'
import WorkDescription from '../components/WorkDescription/WorkDescription'

const Home = () => {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const elementId = location.hash.substr(1)
        const element = document.getElementById(elementId)

        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }

        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => {
            clearTimeout(timer)
        }
    }, [location])

    return (
        <>
            {isLoading
                ? <Loader/>
                : <>
                    <Header />
                    <Banner id='banner'/>
                    <Benefit id='benefit'/>
                    <Possibilities id='possibilities'/>
                    <Advantages id='advantages'/>
                    <WorkDescription id='HowItWorks'/>
                    <Portfolio id='portfolio'/>
                    <Calculator id='calculator'/>
                    <Testimonials id='testimonials'/>
                    <VideoSection/>
                    <Footer />
                    <ToastContainer autoClose={3000} />
                </>
            }
        </>
    )
}

export default Home
