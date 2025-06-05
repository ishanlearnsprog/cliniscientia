import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'

import Logo from '../svg/Logo.jsx'
import './LogoBox.css'

export default function LogoBox() {
    return (
        <img className="logo-primary" src={ logo } />
    )
}
