import React, {useEffect, useState} from "react";

import Banner from "../components/Banner/Banner";
import Benefit from "../components/Benefit/Benefit";
import Possibilities from "../components/Possibilities/Possibilities";
import AppTabs from "../components/AppTabs/AppTabs";
import WorkDescription from "../components/WorkDescription/WorkDescription";
import Calculator from "../components/Calculator/Calculator";
import Testimonials from "../components/Testimonials/Testimonials";
import Portfolio from '../components/Portfolio/Portfolio'
import VideoSection from '../components/VideoSection/VideoSection'
import {useLocation} from "react-router-dom";


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
            <Banner id="banner"/>
            <Benefit id="benefit"/>
            <Possibilities id="possibilities"/>
            {/*<AppTabs id="advantages/>*/}
            {/*<WorkDescription id="workDescription"/>*/}
            <Portfolio id="portfolio"/>
            <Calculator id="calculator"/>
            <Testimonials id="testimonials"/>
            <VideoSection/>
        </>
    )
}

export default Home