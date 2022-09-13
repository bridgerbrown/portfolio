import React from "react";
import ShortBio from "./ShortBio";
import ShortProjects from "./ShortProjects";

function Home() {
    return(
        <div className="Home">
            <main>
                <img src="./src/assets/galaxy.jpg" alt="galaxy" />
            </main>
            <ShortBio />
            <ShortProjects />
        </div>
    )
}

export default Home