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
        <nav className='Navs'>
            <div className='left-of-nav'>
                <div className='sidebar-heading'>
                    <Image 
                        src={'/sun-small.png'}
                        alt='switch to dark theme'
                        onClick={props.themeChange}
                        id='sidebar-switch-icon'
                        width="25"
                        height="25"
                    />
                </div>
            </div>
            <div className='Navbar'>
                <div className='navbar-items'>
                    <ul>
                        <a href="#bio">
                            <li>About</li>
                        </a>

                        <a href="#projects">
                            <li>Projects</li>
                        </a>

                        <a href="#contact">
                            <li>Contact</li>
                        </a>
                    </ul>
                    <div className='Navbar-heading'>
                        <Image 
                            src={'/moon-small.png'} 
                            alt='switch to dark theme'
                            onClick={props.themeChange}
                            id='theme-switch-icon'
                            width="25"
                            height="25"
                        />
                    </div>
                </div>
            </div>
            <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} themeChange={props.themeChange}/>
        </nav>
    </>
    )
}  

export default Navbar