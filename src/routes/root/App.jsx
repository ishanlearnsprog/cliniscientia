import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../components/header/Header.jsx'
import Footer from '../../components/footer/Footer.jsx'

export default function App() {
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
