import React, {useEffect, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css'

import { Loader } from '../common/Loader/Loader'
import ScrollToTopButton from '../common/ScrollToTopButton/ScrollToTopButton'
import VacancyDetail from "../components/VacancyDetail/VacancyDetail";
import {ToastContainer} from "react-toastify";

const VacancyDetailsPage = () => {
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
                    <VacancyDetail/>
                    <ScrollToTopButton/>
                    <ToastContainer autoClose={3000} />
                </>
            }
        </>
    )
}

export default VacancyDetailsPage
