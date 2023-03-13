import React from "react";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Landing from "../components/sections/Landing";
import Navbar from '../components/features/Navbar'
import Skills from "../components/sections/Skills";
import Footer from '../components/sections/Footer'
import Contact from "../components/sections/Contact"
import Design from "../components/sections/Design";
import { useState, useEffect, useRef } from "react";
import GoTop from "../components/features/GoTop";

function Home() {
    const [darkTheme, setDarkTheme] = useState()

    useEffect(() => {   
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches

        if(prefersDarkScheme) {
            document.body.classList.toggle("light-theme");
            setDarkTheme(prefersDarkScheme)
        } else {
            document.body.classList.toggle("dark-theme");
            setDarkTheme(prefersDarkScheme)
        }
    },[darkTheme] )

    function themeChange() {
        if(darkTheme) {
            document.body.classList.toggle("light-theme");
            setDarkTheme(!darkTheme)
        } else {
            document.body.classList.toggle("dark-theme");
            setDarkTheme(!darkTheme)
        }
    };

    const refScrollUp = useRef();

    return(
        <>
            <div className="Home fade" id="home" ref={refScrollUp}>
                <Navbar themeChange={themeChange} /> 
                <GoTop />
                <Landing />
                <About />
                <Skills />
                <Projects />
                <Design />
                <Contact />
                <Footer />
            </div>            
        </>
    )
}

export default Home