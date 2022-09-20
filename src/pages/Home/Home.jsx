import React from "react";
import ShortBio from "./ShortBio";
import ShortWork from "./ShortWork";
import ShortProjects from "./ShortProjects";
import LandingPage from "./LandingPage";

function Home() {
    return(
        <div className="Home">
            <LandingPage />
            <ShortBio />
            <ShortWork />
            <ShortProjects />
        </div>
    )
}

export default Home
