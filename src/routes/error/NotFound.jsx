import { Link } from 'react-router-dom'

import './NotFound.css'

export default function NotFound() {
    return(
        <section className="not-found-box">
            <div className="not-found-content">
                <h1 className="poppins-bold">404</h1>
                <h2 className="poppins-med">Sorry! The page you are looking for does not exist.</h2>
                <div className="error-btn-box">
                    <Link to={ '/' } className="btn btn-primary poppins-bold">Go To Home</Link>
                </div>
            </div>
        </section>
    )
}
