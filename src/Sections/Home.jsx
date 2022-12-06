import React from "react";
import About from "./About";
import Projects from "./Projects";
import Landing from "./Landing";
import Navbar from './Navbar'
import Skills from "./Skills";
import Footer from './Footer'
import Contact from "./Contact"
import '../App.css'
import { useState, useEffect } from "react";

function Home() {
    const [darkTheme, setDarkTheme] = useState()
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(prefersDarkScheme)

    useEffect(() => {
        if(prefersDarkScheme) {
            document.body.classList.toggle("light-theme");
            setDarkTheme(prefersDarkScheme)
        } else {
            document.body.classList.toggle("dark-theme");
            setDarkTheme(prefersDarkScheme)
        }
    }, [])

    function themeChange() {
        if(prefersDarkScheme) {
            document.body.classList.toggle("light-theme");
            setDarkTheme(!darkTheme)
        } else {
            document.body.classList.toggle("dark-theme");
            setDarkTheme(!darkTheme)
        }
    };

    return(
        <div className="Home fade" id="home">
            <Navbar themeChange={themeChange} darkTheme={darkTheme} />
            <Landing darkTheme={darkTheme} />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home