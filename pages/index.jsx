import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Landing from "../components/Landing";
import Navbar from '../components/Navbar'
import Skills from "../components/Skills";
import Footer from '../components/Footer'
import Contact from "../components/Contact"
import { useState, useEffect } from "react";

function Home(props) {
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
        <>
            <div className="Home fade" id="home">
                <Navbar themeChange={themeChange} darkTheme={darkTheme} />
                <Landing darkTheme={darkTheme} />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>            
        </>
    )
}

export default Home