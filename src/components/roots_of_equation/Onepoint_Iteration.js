import React  from "react";
import {Link} from "react-router-dom";

function onepoint() {
    return(
    <div>Onepoint page
        <Link to='/root-of-equation'>
            <button className="btn">Back</button>
            </Link>
    </div>
    )
}

export default onepoint