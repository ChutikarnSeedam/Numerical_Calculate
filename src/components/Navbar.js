import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
  return (
    <nav>
        <ul className={style.Navmenu}>
            <li className={style.categoryMenu} onClick={toggleDropdown}>
                Course
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Status">AboutMe</Link></li>
            <li><Link to="/SignIn">Sign Out</Link></li>
        </ul>
        {isOpen && (
          <ul className={style.dropdownmenu}>
            <li><Link to="/root-of-equation">Root of equation</Link></li>
            <li><Link to="/Solution-Techniques-main">Solution Techniques</Link></li>
            <li><Link to="/categ3">Category3</Link></li>
          </ul>
        )}
    </nav>
  )
}

export default Navbar