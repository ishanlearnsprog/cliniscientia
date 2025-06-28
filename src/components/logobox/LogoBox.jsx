import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'

import './LogoBox.css'

export default function LogoBox() {
    return (
        <Link to={"/"}><img className="logo-primary" src={ logo } /></Link>
    )
}
