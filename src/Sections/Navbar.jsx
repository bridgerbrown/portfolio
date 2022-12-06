import React from 'react'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react';

function Navbar(props) {
    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
      setSideBarOpen(!sidebarOpen);
    };

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [darkNav, setDarkNav] = useState(props.darkTheme)
    useEffect(() => {
        if(props.darkTheme === true){
            setDarkNav(true)
        } else if (props.darkTheme === false) {
            setDarkNav(false)
        } else {
            setDarkNav(prefersDarkScheme)
        }
    }, [props.darkTheme])

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
                        {
                            darkNav ?
                            <img 
                                src='./src/assets/sun.png' 
                                alt='switch to light theme' 
                                onClick={props.themeChange}
                            />
                            :
                            <img 
                                src='./src/assets/moon.png' 
                                alt='switch to dark theme'
                                onClick={props.themeChange}
                            />
                        }
                    </div>
                </div>
            </div>
            <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
        </div>
    )
}  

export default Navbar