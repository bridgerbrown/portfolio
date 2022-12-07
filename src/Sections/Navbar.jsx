import React from 'react'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react';

function Navbar(props) {
    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
      setSideBarOpen(!sidebarOpen);
    };
    return(
        <div className='Navs'>
            <div className='left-of-nav'></div>
            <div className='Navbar'>
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
                    <div className='Navbar-heading'>
                        <img 
                            src='./src/assets/moon.png' 
                            alt='switch to dark theme'
                            onClick={props.themeChange}
                            id='theme-switch-icon'
                        />
                    </div>
                </div>
            </div>
            <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
        </div>
    )
}  

export default Navbar