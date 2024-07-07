import NavMobile from './navmobile/NavMobile.jsx'
import Logo from '../svg/Logo.jsx'
import './Header.css'

export default function Header() {
    return (
        <header>
            <div className="logo-box poppins-bold"><Logo />Clini Scientia</div>
            <NavMobile />
        </header>
    )
}
