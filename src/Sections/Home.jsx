import React from "react";
import About from "./About";
import Projects from "./Projects";
import Landing from "./Landing";
import HomeNav from './Navbar'
import Skills from "./Skills";
import Footer from './Footer'

function Home() {
    return(
        <div className="Home">
            <HomeNav />
            <Landing />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}

export default Home
