import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-cta">
                    <Link to={ '/' } className="logo">Clini Scientia</Link>
                    <p>Launch your career in Clinical Data Management with Clini Scientia's comprehensive one-on-one course taught by an experienced data manager.</p>
                </div>
                <div class="footer-nav">
                <nav className="nav-desktop">
                    <ul>
                        <li><Link to={ '/' } className="nav-desktop-links">Home</Link></li>
                        <li><Link to={ 'about' } className="nav-desktop-links">About</Link></li>
                        <li><Link to={ 'course' } className="nav-desktop-links">Course</Link></li>
                        <li><Link to={ 'contact' } className="nav-desktop-links">Contact</Link></li>
                    </ul>
                </nav>
                </div>
            </div>
        </footer>
    )
}
