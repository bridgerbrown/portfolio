import React from "react";

const Sidebar = props => {
  const sidebarClass = props.isOpen ? `${props.styles["sidebar"]} ${props.styles["open"]}` : props.styles["sidebar"];

  return (
    <div className={props.styles["Sidebar-container"]}>
        <button onClick={props.toggleSidebar} className={props.styles["sidebar-toggle"]}>
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
export default Sidebar;
