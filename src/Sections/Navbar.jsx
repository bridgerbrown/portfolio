import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return(
        <div className='Navbar'>
            <div className='Navbar-heading'>
            </div>
            <div className='navbar-items'>
                <ul>
                    <Link to="/home">
                        <li>Home</li>
                    </Link>

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
            </div>
        </div>
    )
}  

export default Navbar