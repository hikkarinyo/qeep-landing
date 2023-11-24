import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
    return (
       <>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            <Footer/>
       </>
)
}

export default App
