import React from "react";

import "./NavBar.css";


const NavBar  = (props) => {
    return ( 
    <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
  
        
      <a class="navbar-brand">IRussell Music</a>
      
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            </input>
        <button onClick="btn btn-outline-success" type="submit">Search Music</button>
      </form>
      
    </div>
  </nav> 
    );
};
 
 
export default NavBar;