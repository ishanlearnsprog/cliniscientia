import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.jpg'
import './Footer.css'

export default function Footer() {

    return (
        <footer>
            <div className="footer-logo">
                <Link to={ '/' } className="logo-box poppins-bold"><img className="logo-primary" src={ logo } /></Link>
            </div>
            <nav className="footer-nav">
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
