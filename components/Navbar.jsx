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
        <div className={styles["Navs"]}>
            <div className={styles["left-of-nav"]}></div>
            <div className={styles["Navbar"]}>
                <div className={styles["navbar-items"]}>
                        <a href="#bio">
                            <li>About</li>
                        </a>

                        <a href="#projects">
                            <li>Projects</li>
                        </a>

                        <a href="#contact">
                            <li>Contact</li>
                        </a>
                    <div className={styles["Navbar-heading"]}>
                        <Image 
                            src='../public/moon.png' 
                            alt='switch to dark theme'
                            onClick={props.themeChange}
                            id='theme-switch-icon'
                        />
                    </div>
                </div>
            </div>
            <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} styles={styles} />
        </div>
    )
}  

export default Navbar