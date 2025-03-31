import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import EndContact from '../../components/endcontact/EndContact.jsx'
import Placement from '../../components/placement/Placement.jsx'
import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import logo from '../../assets/images/logo.jpg'
import courseCDM from '../../assets/images/courseCDM.jpg'
import Quotes from '../../components/svg/Quotes.jsx'
import Logo from '../../components/svg/Logo.jsx'
import Certified from '../../components/svg/Certified.jsx'
import Syllabus from '../../components/svg/Syllabus.jsx'
import Monitor from '../../components/svg/Monitor.jsx'
import Clock from '../../components/svg/Clock.jsx'
import './Home.css'

export default function Home() {

    return (
        <Fragment>
            <section className="intro-box">
                <div className="intro-content-box">
                    <img className="logo-primary" src={ logo } />
                    <h1 className="poppins-bold">Learn Clinical Data Management &#x26; Clinical Research</h1>
                    <p className="poppins-med">Launch your career in Clinical Research with our online classes & hands-on training.</p>
                    <div className="intro-img-box intro-imga-box">
                        <img src={ image1 } />
                    </div>
                    <div className="section-btn-box">
                        <Link to={ '/contact' } className="btn btn-primary poppins-bold">Start Learning</Link>
                    </div>
                </div>
                <div className="intro-img-box intro-imgb-box">
                    <img src={ image1 } />
                </div>
            </section>
            <section className="services-box" id="intro-info">
                <div className="services-cards-box">
                    <div className="services-card">
                        <Certified />
                        <div className="services-card-content">
                            <h2 className="poppins-bold">ISO 9001: 2015 Certfied</h2>
                            <p className="poppins-reg">Learn from experienced prossionals in a certified training program.</p>
                        </div>
                    </div>
                    <div className="services-card">
                        <Syllabus />
                        <div className="services-card-content">
                            <h2 className="poppins-bold">Comprehensive Material</h2>
                            <p className="poppins-reg">Equips the learner with the essential skills needed for a successful carrer.</p>
                        </div>
                    </div>
                    <div className="services-card">
                        <Monitor />
                        <div className="services-card-content">
                            <h2 className="poppins-bold">Online Classes</h2>
                            <p className="poppins-reg">Join classes from anywhere with an internet connection.</p>
                        </div>
                    </div>
                    <div className="services-card">
                        <Clock />
                        <div className="services-card-content">
                            <h2 className="poppins-bold">Flexible Timings</h2>
                            <p className="poppins-reg">Structure your learning experience around your schedule.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="course-box">
                <h1 className="poppins-bold">Take a deep dive in the world of Clinical Research with our course</h1>
                <div className="course-wrapper">
                    <div className="course-image">
                        <img src={ courseCDM } />
                    </div>
                    <div className="course-content">
                        <p class="poppins-reg">Clini Scientia's</p>
                        <h1 class="poppins-bold">Clinical Data Management</h1>
                        <ul class="poppins-reg">
                            <li>Suitable for both beginner and advanced learners.</li>
                            <li>Comprehensive syllabus that covers data maniplulation & analysis, project lifecycle & interview preparation material.</li>
                            <li>Hands-on training to match industry standards.</li>
                            <li>Completion certficate provided after course completion.</li>
                        </ul>
                        <div className="section-btn-box">
                            <Link to={ '/course' } className="btn btn-primary-white poppins-bold">Course Details</Link>
                            <Link to={ '/contact' } className="btn btn-primary-white poppins-bold">Start Learning</Link>
                        </div>       
                    </div>
                </div>
            </section>
            <Placement />
            <section className="reviews-box">
                <div className="reviews-img-box">
                    <img src={ image2 } />
                </div>
                <div className="reviews-content-box">
                    <h1 className="poppins-bold">Hear from our students</h1>
                    <div className="reviews-cards-box">
                        <div className="review-card">
                            <Quotes />
                            <h2 className="poppins-bold">Ishan Rajendra</h2>
                            <p className="poppins-med">If you're looking for a well-structured program to launch your CDM career, this course is perfect.</p>
                        </div>
                        <div className="review-card">
                            <Quotes />
                            <h2 className="poppins-bold">Kaustubh Singh</h2>
                            <p className="poppins-med">I have implemented several strategies learned in the course, and I've noticed a significant improvement in my daily workflow.</p>
                        </div>
                    </div>
                </div>
            </section>
            <EndContact title={ 'Join 100+ students already learning with Clini Scientia' } subtitle={ 'We at Clini Scientia aim to equip you with the neccesary skills to build a successful career in Clinical Research.' }/>
        </Fragment>
    )
}
