import React from "react";
import About from "./About";
import Projects from "./Projects";
import Landing from "./Landing";
import Navbar from './Navbar'
import Skills from "./Skills";
import Footer from './Footer'
import Contact from "./Contact"
import { useState } from "react";
import { useEffect } from "react";
import '../App.css'

function Home() {
    const [darkTheme, setDarkTheme] = useState(true)
    const [darkLand, setDarkLand] = useState(true)
    const [count, setCount] = useState(0)

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
      document.body.classList.toggle("light-theme");
      setDarkTheme(true)
      setCount(count + 1)
    } else if (currentTheme == "light") {
      document.body.classList.toggle("dark-theme");
      setDarkTheme(false)
      setCount(count + 1)
    }
    
    function themeChange() {
      if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        setDarkTheme(true)
        setCount(count + 1)
      } else {
        document.body.classList.toggle("dark-theme");
        setDarkTheme(false)
        setCount(count + 1)
      }
    };

    useEffect(() => {
        setDarkLand(!darkLand)
    }, [count])



    return(
        <div className="Home fade" id="home" key={darkTheme}>
            <Navbar themeChange={themeChange} darkLand={darkLand} />
            <Landing darkLand={darkLand} key={darkLand}/>
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
