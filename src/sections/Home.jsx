import React from "react";
import Bio from "./Bio";
import Work from "./Work";
import Projects from "./Projects";

function Home() {
    return(
        <div className="Home">
            <main>
                <img src="./src/assets/galaxy.jpg" alt="galaxy" className="Main-Image" />
            </main>
            <Bio />
            <Work />
            <Projects />
        </div>
    )
}

export default Home
