import LogoBox from '../logobox/LogoBox.jsx'
import NavDesktop from './navdesktop/NavDesktop.jsx'
import NavMobile from './navmobile/NavMobile.jsx'
import Logo from '../svg/Logo.jsx'
import './Header.css'

export default function Header() {
    return (
        <header>
            <LogoBox />
            
            <NavMobile />
            <NavDesktop />
        </header>
    )
}
