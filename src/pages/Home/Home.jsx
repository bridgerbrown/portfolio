import React from "react";
import ShortBio from "./ShortBio";
import ShortWork from "./ShortWork";
import ShortProjects from "./ShortProjects";
import LandingPage from "./LandingPage";
import HomeNav from './HomeNav/HomeNav'
import Skills from "./Skills";

function Home() {
    return(
        <div className="Home">
            <HomeNav />
            <LandingPage />
            <ShortBio />
            <Skills />
            <ShortWork />
        </div>
    )
}

export default Home
