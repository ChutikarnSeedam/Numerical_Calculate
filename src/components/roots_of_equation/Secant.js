import React  from "react";
import {Link} from "react-router-dom";

function secant() {
    return(
        <div>Secant page
        <Link to='/root-of-equation'>
            <button className="btn">Back</button>
            </Link>
    </div>
    )
}

export default secant