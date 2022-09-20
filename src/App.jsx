import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './pages/Home/Home.jsx'
import Bio from './pages/Bio/Bio'
import Home from './sections/Home'
import Projects from './pages/Projects/Projects'
import Work from './sections/Work'
import Footer from './pages/Home/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="bio" element={<Bio />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
