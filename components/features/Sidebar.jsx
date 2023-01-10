import React from "react";
import Image from "next/image";

const Sidebar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";

  return (
    <>
        <nav className="Sidebar-container">
            <button onClick={props.toggleSidebar} className="sidebar-toggle">
            ☰
            </button>
            <div className={sidebarClass}>
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
        </nav>
    </>
  );
};
export default Sidebar;