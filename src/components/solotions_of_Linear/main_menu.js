import React from "react";
import {Link} from "react-router-dom";
import style from "../css/SolutionTechniques.module.css"

function Solution_Techniques_main() {
    return (
        <div>
            <label className={style.solutionLable}>Solution Techniques</label>
            <div>
                <Link to="/Cramers-Rule">  
                    <button>Cramer's Rule</button>
                </Link>
                <Link to="/Gauss-Elimination-Method">
                    <button>Gauss Elimination Method</button>
                </Link>
                <Link to="/Gauss-Jordan-Method">
                    <button>Gauss Jordan Method</button>
                </Link>
                <Link to="/Metrix-Inversion-method">
                    <button>Metrix Inversion method</button>
                </Link>
                <Link to="/LU-Decomposition-Method">
                    <button>LU Decomposition Method</button>
                </Link>
                <Link to="/Integrate">
                    <button>Integrate</button>
                </Link>
            </div>
    </div>
    ); 
}

export default Solution_Techniques_main