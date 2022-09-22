import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home/Home.jsx'
import Bio from './pages/Bio/Bio'
import Projects from './pages/Projects/Projects'
import Work from './pages/Work/Work'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeAlt from './pages/HomeAlt/HomeAlt'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<HomeAlt />} />
            <Route path="work" element={<Work />} />
            <Route path="projects" element={<Projects />} />
            <Route path="bio" element={<Bio />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
