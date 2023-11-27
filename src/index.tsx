import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.scss'
import App from './App'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
      <BrowserRouter>
          <App/>
      </BrowserRouter>
)
