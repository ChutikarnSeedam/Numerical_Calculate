import React  from "react";
import {Link} from "react-router-dom";

function newton_raphson() {
    return(
        <div>Newton Raphson page
        <Link to='/root-of-equation'>
            <button className="btn">Back</button>
        </Link>
        </div>
    ) 
}

export default newton_raphson