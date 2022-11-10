import React from "react";
import ShortBio from "./ShortBio";
import ShortWork from "./ShortWork";
import LandingPage from "./LandingPage";
import HomeNav from './HomeNav/HomeNav'
import Skills from "./Skills";
import Footer from './Footer'

function Home() {
    return(
        <div className="Home">
            <HomeNav />
            <LandingPage />
            <ShortBio />
            <Skills />
            <ShortWork />
            <Footer />
        </div>
    )
}

export default Home
