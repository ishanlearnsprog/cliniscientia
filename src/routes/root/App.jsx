import { Fragment, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Whatsapp from '../../components/svg/Whatsapp.jsx'
import Header from '../../components/header/Header.jsx'
import Footer from '../../components/footer/Footer.jsx'

export default function App() {
    const { key } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [ key ])

    return (
        <Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <a href={ import.meta.env.VITE_WHATSAPP_URL } target="_blank" rel="noopener noreferrer" className="whatsapp-box poppins-med"><Whatsapp />Connect on Whatsapp</a>
        </Fragment>
    )
}
