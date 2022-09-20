import React from 'react'
import '../Navbar/navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
    return(
        <div className='Navbar'>
            <div className='Navbar-heading'>
                <img src="./src/assets/mars.png" />
            </div>
            
            <ul>
                <Link to="../src/pages/Home/Home.jsx">
                    <li>Home</li>
                </Link>

                <Link to="../src/pages/Work/Work.jsx">
                    <li>Work</li>
                </Link>

                <Link to="../src/pages/Projects/Projects.jsx">
                    <li>Projects</li>
                </Link>

                <Link to="../src/pages/Bio/Bio.jsx">
                    <li>Bio</li>
                </Link>
            </ul>
        </div>
    )
}  

export default Navbar