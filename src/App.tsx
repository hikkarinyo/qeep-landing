import React from 'react'
import {Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import VacanciesPage from './pages/VacanciesPage'
import VacancyDetailsPage from './pages/VacancyDetailsPage'
import NotFound from './components/NotFound/NotFound'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/vacancies' element={<VacanciesPage/>}/>
                <Route path='/vacancies/:name' element={<VacancyDetailsPage/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
