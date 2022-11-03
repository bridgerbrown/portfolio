import React from "react";
import { Link } from "react-router-dom"
import '../App.css'

function HomeLandNav() {
    return(
        <div>
            <div className='homeland-nav'>
                <ul>
                    <Link to="/projects">
                        <li>Projects</li>
                    </Link>

                    <Link to="/bio">
                        <li>About</li>
                    </Link>

                    <Link to="/bio">
                        <li>Contact</li>
                    </Link>
                </ul>
                <button>Resume</button>
            </div>
        </div>
    )
}

export default HomeLandNav