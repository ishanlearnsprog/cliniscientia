import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../svg/Logo.jsx'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="logo-box poppins-bold"><Logo /> Clini Scientia</div>
            <nav>
                <ul>
                    <li><Link to={ '/' } className="poppins-med">Home</Link></li>
                    <li><Link to={ '/about' } className="poppins-med">About</Link></li>
                    <li><Link to={ '/course' } className="poppins-med">Course</Link></li>
                    <li><Link to={ '/contact' } className="poppins-med">Contact</Link></li>
                </ul>
            </nav>
        </footer>
    )
}
