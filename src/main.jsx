import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './Sections/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route path="work" element={<Home />} />
            <Route path="projects" element={<Home />} />
            <Route path="bio" element={<Home />} />
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
