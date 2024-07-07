import { useState, Fragment } from 'react'

import Hamburger from '../../svg/Hamburger.jsx'
import Cross from '../../svg/Cross.jsx'
import './NavMobile.css'

export default function NavMobile() {
    const [ openMenu, setOpenMenu ] = useState(false);

    function toggleMenu(e) {
        setOpenMenu(!openMenu)
    }

    return (
        <Fragment>
            <div className="menu-button" onClick={ toggleMenu }>
                { openMenu === false ? <Hamburger /> : <Cross /> }
            </div>
        </Fragment>
    )
}
