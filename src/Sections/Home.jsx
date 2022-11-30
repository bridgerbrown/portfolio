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
    const [darkTheme, setDarkTheme] = useState(true)
    const [darkLand, setDarkLand] = useState(true)

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
        setDarkTheme(!darkTheme)
      } else {
        document.body.classList.toggle("dark-theme");
        setDarkTheme(!darkTheme)
      }
    };

    useEffect(() => {
        if(darkTheme) {
            setDarkLand(true)
        } else if(!darkTheme){
           setDarkLand(false) 
        }
    }, [darkTheme])



    return(
        <div className="Home fade" id="home" key={darkLand}>
            <Navbar themeChange={themeChange} darkLand={darkLand} />
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
