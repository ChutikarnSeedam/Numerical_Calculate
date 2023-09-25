import { Link } from "react-router-dom";
import React from "react";

function login() {
    return (
        <div>login page
            <form>
                <div className="login-component">
                <label>username</label>
                <input type='text' id='login-username'/>
                <lable>password</lable>
                <input type='password' id='login-password'/>
                </div>
            </form>
            <div className="login-component">
                <Link to="/home">
                    <button className="login-btn">Login</button>
                </Link>
            </div>
        </div>
    )
} 

export default login;