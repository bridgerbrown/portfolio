import React from "react";
import About from "./About";
import Projects from "./Projects";
import Landing from "./Landing";
import HomeNav from './Navbar'
import Skills from "./Skills";
import Footer from './Footer'
import Contact from "./Contact"

function Home() {
    return(
        <div className="Home" id="home">
            <HomeNav />
            <Landing />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
