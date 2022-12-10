import React from 'react'
import Sidebar from './Sidebar'
import { useState } from 'react';
import Image from 'next/image';

function Navbar(props) {
    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
      setSideBarOpen(!sidebarOpen);
    };
    return(
    <>
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
                        <Image 
                            src='/../public/moon.png' 
                            alt='switch to dark theme'
                            onClick={props.themeChange}
                            id='theme-switch-icon'
                            width="25"
                            height="25"
                        />
                    </div>
                </div>
            </div>
            <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
        </div>
    </>
    )
}  

export default Navbar