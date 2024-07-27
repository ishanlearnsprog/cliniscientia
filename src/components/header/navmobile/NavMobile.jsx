import { useState, useEffect, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import LogoBox from '../../logobox/LogoBox.jsx'
import Hamburger from '../../svg/Hamburger.jsx'
import Cross from '../../svg/Cross.jsx'
import './NavMobile.css'

export default function NavMobile() {
    const [ openMenu, setOpenMenu ] = useState(false);

    useEffect(() => {
        const mobileMenu = document.querySelector(".mobile-menu-box")
        const mobileMenuBackdrop = document.querySelector(".mobile-nav-backdrop")
        if ( openMenu ) {
            mobileMenuBackdrop.style.display = 'block'
            mobileMenu.style.width = '200px'
        } else {
            mobileMenuBackdrop.style.display = 'none'
            mobileMenu.style.width = '0px'
        }
    }, [openMenu])

    return (
        <Fragment>
            <button className="menu-btn menu-btn-open" onClick={ () => setOpenMenu(true) }>
                { openMenu === false && <Hamburger /> }
            </button>
            <div className="mobile-nav-backdrop" onClick={ () => setOpenMenu(false) }></div>
            <div className="mobile-menu-box">
                <div className="menu-btn-close-box">
                    <button className="menu-btn menu-btn-close" onClick={ () => setOpenMenu(false) }>
                        <Cross />
                    </button>
                </div>
                <nav className="mobile-nav-box">
                    <ul>
                        <NavLink to={ '/' } onClick={ () => setOpenMenu(false) } className="poppins-med">Home</NavLink>
                        <NavLink to={ '/about' } onClick={ () => setOpenMenu(false) } className="poppins-med">About</NavLink>
                        <NavLink to={ '/course' } onClick={ () => setOpenMenu(false) } className="poppins-med">Course</NavLink>
                        <NavLink to={ '/contact' } onClick={ () => setOpenMenu(false) } className="mobile-nav-item poppins-med">Contact</NavLink>
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}
