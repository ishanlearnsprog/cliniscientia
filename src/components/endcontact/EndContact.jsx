import { Link } from 'react-router-dom'

import Logo from '../svg/Logo.jsx'
import './EndContact.css'

export default function EndContact({ title, subtitle }) {
    return (
        <section className="end-contact-box">
            <div className="section-icon-box">
                <Logo />
            </div>
            <h1 className="poppins-bold">{ title }</h1>
            <p className="poppins-reg">{ subtitle }</p>
            <div className="section-btn-box">
                <Link to={ '/contact' } className="poppins-bold btn btn-primary-white">Book a trial class</Link>
            </div>
        </section>
    )
} 
