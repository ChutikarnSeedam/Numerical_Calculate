import React from "react";
import { Link } from "react-router-dom";

function root_of_equation_main() {
    return (
        <div>This is Root of Equation Main page
        
        <Link to="/bisection">
            <button>bisection</button>
        </Link>
        <Link to="/false-position">
            <button>false position</button>
        </Link>
        <Link to="/newton-raphson">
            <button>newton raphson</button>
        </Link>
        <Link to="/onepoint-iteration">
            <button>onepoint iteration</button>
        </Link>
        <Link to="/secant">
            <button>secant</button>
        </Link>
        </div>
    )
}

export default root_of_equation_main