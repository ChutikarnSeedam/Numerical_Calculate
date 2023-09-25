import React  from "react";
import {Link} from "react-router-dom";

function false_position() {
    return(    
        <div>Newton Raphson page
          <Link to='/root-of-equation'>
              <button className="btn">Back</button>
          </Link>
        </div>
    )
}

export default false_position