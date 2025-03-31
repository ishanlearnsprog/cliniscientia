import { Fragment, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Whatsapp from '../../components/svg/Whatsapp.jsx'
import Header from '../../components/header/Header.jsx'
import Footer from '../../components/footer/Footer.jsx'

export default function App() {
    let location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [ location ])

    return (
        <Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <a href="https://wa.me/919250323387" target="_blank" rel="noopener noreferrer" className="whatsapp-box poppins-med"><Whatsapp /></a>
        </Fragment>
    )
}
