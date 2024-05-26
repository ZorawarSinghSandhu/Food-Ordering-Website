import React from 'react';
import login from "../Images/Login.png";

function Login() {
    return (
        <div id="Login">
            <button type="button" className="login-button">
                <img src={login} alt="Login Icon" height="20px" />
                <p>Log in</p>
            </button>
        </div>
    );
}

export default Login;
