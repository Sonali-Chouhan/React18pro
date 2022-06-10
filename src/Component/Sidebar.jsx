import { Link } from "react-router-dom";

import React,{ useState } from "react";


const Sidebar = () => {
    const [sidebar,setsidebar]=useState(false)
    const showSidebar = () => setsidebar(!sidebar);
    return (
      
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        <button className="hamburger" type="button" onClick={showSidebar}>
          <div></div>
        </button>
      <ul>
        
        <li>
        <Link to="/">Home</Link>
        
        </li>
        <li>
          <Link to="/singup">Up</Link>
        </li>
        <li>
        <Link to="/singin">Login</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/profile">Profile</Link>
        </li>
        <li>
        <Link to="/homes">Data</Link>
        </li>
      </ul>
      </nav>
   
  );
};
export default Sidebar;
