import React from "react";
import Logo from "../Images/Logo.png";

function Title(){
    return (
        <div id="title">
        <img id="brand-logo" src={Logo} alt="Meal Dash Logo" height="40px"/>
        <h2 className="kalam-bold">Meal Dash</h2>
    </div>)
}

export default Title;