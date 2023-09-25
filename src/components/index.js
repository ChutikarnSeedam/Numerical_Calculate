import React from "react";
import { Link } from "react-router-dom";

function index() {
    return (
        <div>
            Welcome to Numerical Calculate Website 
            By Chutikarn Seedam

            <Link to='/login'>Let's GO</Link>
        </div>
    )
}

export default index