import { useState, useEffect, Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Hamburger from '../../svg/Hamburger.jsx'
import Cross from '../../svg/Cross.jsx'
import './NavMobile.css'

export default function NavMobile() {
    const [ openMenu, setOpenMenu ] = useState(false);

    return (
        <Fragment>
            <button className="menu-button" onClick={ () => setOpenMenu(true) }>
                { openMenu === false && <Hamburger /> }
            </button>
            { openMenu && (
                <Fragment>
                    <div className="mobile-nav-backdrop" onClick={ () => setOpenMenu(false) }>
                    </div>
                    <nav className="mobile-nav-box">
                        <ul>
                            <Link to={ '/' } onClick={ () => setOpenMenu(false) } className="poppins-med">Home</Link>
                            <Link to={ '/about' } onClick={ () => setOpenMenu(false) } className="poppins-med">About</Link>
                            <Link to={ '/course' } onClick={ () => setOpenMenu(false) } className="poppins-med">Course</Link>
                            <Link to={ '/contact' } onClick={ () => setOpenMenu(false) } className="mobile-nav-item poppins-med">Contact</Link>
                        </ul>
                    </nav>
                    <button className="menu-button-close" onClick={ () => setOpenMenu(false) }>
                        { openMenu && <Cross /> }
                    </button>
                </Fragment>
            )}
        </Fragment>
    )
}
