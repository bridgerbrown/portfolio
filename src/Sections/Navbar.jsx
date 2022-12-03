import React from 'react'
import Sidebar from './Sidebar';
import { useState } from 'react';

function Navbar(props) {

    return(
        <div className='Navs'>
            <div></div>
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
                            !props.darkLand ?
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
        </div>
    )
}  

export default Navbar