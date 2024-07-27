import NavDesktop from './navdesktop/NavDesktop.jsx'
import NavMobile from './navmobile/NavMobile.jsx'
import LogoBox from '../logobox/LogoBox.jsx'
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
