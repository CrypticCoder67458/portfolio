import React from 'react'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav>
        <h1>Youssef Mlika</h1>
        <div className='nav-links-container'>
            <ul className='nav-links'>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <ul className='lang'>
                <li className='active'>EN</li>
                <li>DE</li>
            </ul>
        </div>
        
    </nav>
  )
}
