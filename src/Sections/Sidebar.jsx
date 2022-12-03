import React from "react";

const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div className="Sidebar-container">
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
    </div>
  );
};
export default SideBar;
