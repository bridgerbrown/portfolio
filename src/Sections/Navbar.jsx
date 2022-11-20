import React from 'react'

function Navbar() {
    return(
        <div className='Navbar'>
            <div className='Navbar-heading'>
            </div>
            <div className='navbar-items'>
                    <a href="#home">
                        <li>Home</li>
                    </a>

                    <a href="#projects">
                        <li>Projects</li>
                    </a>

                    <a href="#bio">
                        <li>About</li>
                    </a>

                    <a href="#bio">
                        <li>Contact</li>
                    </a>
            </div>
        </div>
    )
}  

export default Navbar