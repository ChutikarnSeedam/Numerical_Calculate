import React from 'react'
import { Link } from 'react-router-dom'
import root_of_equation_main from './roots_of_equation/Root-of-quation-main'
import SolutionTechniques from './solotions_of_Linear/main_menu'



function home() {
    return (
        <div>Home page
            <Link to="/root-of-equation">
            <button onClick={root_of_equation_main}>Root of equation</button>
            </Link>
            <Link to="/Solution-Techniques-main">
                <button onClick={SolutionTechniques}>Solution Techniques Linear Equation</button>
            </Link>
        </div>
    )
}

export default home