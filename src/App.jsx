import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './pages/Home/Footer'
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Outlet />
    </div>
  )
}

export default App
