import { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import Menu from '../../svg/Menu.jsx'
import Cross from '../../svg/Cross.jsx'

import './NavMobile.css'

export default function NavMobile({ openMenu, toggleMenu }) {
        return (
        <Fragment>
            <div className="menu-marker" onClick={ toggleMenu }>{ openMenu ? <Cross /> : <Menu /> }</div>
            <div className="menu-container" style={{ display: openMenu ? "block": "none" }}>
                <header>
                    <div><Link to={ '/' } className="logo" onClick={ () => setOpenMenu(false) }>Clini Scientia</Link></div>
                    <div className="menu-marker" onClick={ toggleMenu }>{ openMenu ? <Cross /> : <Menu /> }</div>
                </header>
                <nav>
                    <ul>
                        <li><Link to={ '/' } className="nav-mobile-links" onClick={ toggleMenu }>Home</Link></li>
                        <li><Link to={ 'about' } className="nav-mobile-links" onClick={ toggleMenu }>About</Link></li>
                        <li><Link to={ 'course' } className="nav-mobile-links" onClick={ toggleMenu }>Course</Link></li>
                        <li><Link to={ 'contact' } className="nav-mobile-links" onClick={ toggleMenu }>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}
