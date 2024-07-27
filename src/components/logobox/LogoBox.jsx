import { Link } from 'react-router-dom'

import Logo from '../svg/Logo.jsx'
import './LogoBox.css'

export default function LogoBox() {
    return (
        <Link to={ '/' } className="logo-box poppins-bold"><Logo />Clini Scientia</Link>
    )
}
