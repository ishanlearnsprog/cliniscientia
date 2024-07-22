import { NavLink } from 'react-router-dom'

import './NavDesktop.css'

export default function NavDesktop() {
    return (
        <nav className="menu-desktop">
            <ul>
                <li><NavLink to={ '/' } className="poppins-med">Home</NavLink></li>
                <li><NavLink to={ '/about' } className="poppins-med">About</NavLink></li>
                <li><NavLink to={ '/course' } className="poppins-med">Course</NavLink></li>
                <li><NavLink to={ '/contact' } className="poppins-med">Contact</NavLink></li>
            </ul>
        </nav>
    )
}
