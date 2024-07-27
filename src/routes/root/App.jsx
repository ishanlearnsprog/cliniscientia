import { Fragment, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

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
        </Fragment>
    )
}
