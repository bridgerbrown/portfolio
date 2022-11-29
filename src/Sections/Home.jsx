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

function Home() {
    const [darkTheme, setDarkTheme] = useState(false)
    const [darkLand, setDarkLand] = useState(false)

    useEffect(() => {
        if(darkTheme) {
            setDarkLand(true)
        } else {
            setDarkLand(false)
        }
    }, [darkTheme])


    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
      document.body.classList.toggle("dark-theme");
    } else if (currentTheme == "light") {
      document.body.classList.toggle("light-theme");
    }
    
    function themeChange() {
      if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        setDarkTheme(true)
      } else {
        document.body.classList.toggle("dark-theme");
        setDarkTheme(false)
      }
    };
    

    return(
        <div className="Home" id="home">
            <Navbar themeChange={themeChange} />
            <Landing darkLand={darkLand} />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
