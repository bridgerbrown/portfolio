import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './Sections/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
