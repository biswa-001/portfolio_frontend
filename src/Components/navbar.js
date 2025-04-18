import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-md navbar-light sticky-top  ">
        <div class="container p-2">
          
          <NavLink className="navbar-brand" to="/" style={{ color: "white" }}>
          <b><span style={{ color: "purple" }}>P</span>othfolio</b>
        </NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                  style={{ color: "white" }}
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
               
                <NavLink
                  to="/about"
                  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                  style={{ color: "white" }}
                >
                  About
                </NavLink>
              </li>
              <li class="nav-item">
              
                <NavLink
                  to="/project"
                  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                  style={{ color: "white" }}
                >
                  Project
                </NavLink>
              </li>
              <li class="nav-item">
              
                <NavLink
                  to="/contract"
                  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                  style={{ color: "white" }}
                >
                  Contract
                </NavLink>
              </li>
              
            </ul>
            </form>
          </div>
        </div>
      </nav>
    
     );
}

export default Navbar;