import React from 'react'

function Navbar(props) {
    return(
        <div className='Navbar'>
            <div className='Navbar-heading'>
                <button id='btn-toggle'onClick={props.themeChange}>dark</button>
            </div>
            <div className='navbar-items'>
                    <a href="#bio">
                        <li>About</li>
                    </a>

                    <a href="#projects">
                        <li>Projects</li>
                    </a>

                    <a href="#contact">
                        <li>Contact</li>
                    </a>
            </div>
        </div>
    )
}  

export default Navbar