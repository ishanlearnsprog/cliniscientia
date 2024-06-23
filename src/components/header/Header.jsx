import { useState } from 'react'
import { Link } from 'react-router-dom'

import NavMobile from './navmobile/NavMobile.jsx'
import './Header.css'

export default function Header() {
    const [ openMenu, setOpenMenu ] = useState(false);

    function toggleMenu() {
        setOpenMenu( !openMenu )
    }

    return (
        <header>
            <div><Link to={ '/' } className="logo" onClick={ () => setOpenMenu(false) }>Clini Scientia</Link></div>
            <NavMobile openMenu={ openMenu } toggleMenu={ toggleMenu } />
            <nav className="nav-desktop">
                <ul>
                    <li><Link to={ '/' } className="nav-desktop-links">Home</Link></li>
                    <li><Link to={ 'about' } className="nav-desktop-links">About</Link></li>
                    <li><Link to={ 'course' } className="nav-desktop-links">Course</Link></li>
                    <li><Link to={ 'contact' } className="nav-desktop-links">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
