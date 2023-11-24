import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/layout/index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
      <BrowserRouter>
          <App />
      </BrowserRouter>
)
