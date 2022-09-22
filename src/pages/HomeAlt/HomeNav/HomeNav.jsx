import React from 'react'
import '../HomeNav/homenav.css'
import { Link } from "react-router-dom"

function Navbar() {
    return(
        <div className='Navbar'>
            <div className='Navbar-heading'>
            </div>
            
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
        </div>
    )
}  

export default Navbar