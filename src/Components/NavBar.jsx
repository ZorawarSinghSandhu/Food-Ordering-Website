import React, { useState } from "react";
import "../Fonts.css";
import Title from "./Title.jsx";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";

function NavBar() {
  

  return (
    <div className="navbar">
      <Title />
      <div id="search-box">
        <input type="text" placeholder="Search..." />
      </div>
      <div>
        <div id="menu" className="karla">
          <button type="button">
            <h3>Menu</h3>
          </button>
          
        </div>
      </div>
      <Login />
      <SignUp />
    </div>
  );
}

export default NavBar;
