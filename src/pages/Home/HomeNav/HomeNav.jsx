import React from 'react'
import './homenav.css'
import { Link } from "react-router-dom"

function Navbar() {
    return(
        <div className='Navbar'>
            <div className='Navbar-heading'>
                <h1>bridger.dev</h1>
            </div>
            <div className='navbar-items'>
                <ul>
                    <Link to="/work">
                        <li>Work</li>
                    </Link>

                    <Link to="/projects">
                        <li>Projects</li>
                    </Link>

                    <Link to="/bio">
                        <li>Bio</li>
                    </Link>
                </ul>
                <button>Resume</button>
            </div>
        </div>
    )
}  

export default Navbar