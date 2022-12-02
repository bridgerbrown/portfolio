import React from 'react'

function Navbar(props) {
    function openNav() {
        document.getElementById("Sidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
      
    function closeNav() {
        document.getElementById("Sidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

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
            <div className='Sidebar'>
                <div id="Sidebar" className="Sidebar-items">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
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

                <div id="main">
                    <button class="openbtn" onclick="openNav()">☰</button>
                </div>
            </div>
        </div>
    )
}  

export default Navbar