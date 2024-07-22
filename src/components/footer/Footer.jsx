import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import LogoBox from '../logobox/LogoBox.jsx'
import './Footer.css'

export default function Footer() {

    return (
        <footer>
            <LogoBox />
            <nav>
                <ul>
                    <li><NavLink to={ '/' } className="poppins-med">Home</NavLink></li>
                    <li><NavLink to={ '/about' } className="poppins-med">About</NavLink></li>
                    <li><NavLink to={ '/course' } className="poppins-med">Course</NavLink></li>
                    <li><NavLink to={ '/contact' } className="poppins-med">Contact</NavLink></li>
                </ul>
            </nav>
        </footer>
    )
}
