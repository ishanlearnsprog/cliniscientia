import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import EndContact from '../../components/endcontact/EndContact.jsx'
import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import Quotes from '../../components/svg/Quotes.jsx'
import Logo from '../../components/svg/Logo.jsx'
import People from '../../components/svg/People.jsx'
import Syllabus from '../../components/svg/Syllabus.jsx'
import Monitor from '../../components/svg/Monitor.jsx'
import Clock from '../../components/svg/Clock.jsx'
import './Home.css'

export default function Home() {

    return (
        <Fragment>
            <section className="intro-box">
                <div className="intro-content-box">
                    <h1 className="poppins-bold">Learn Clinical Data Management &#x26; Clinical Research</h1>
                    <p className="poppins-med">Launch your career in Clinical Research with our online one-on-one course.</p>
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
                <h1 className="poppins-bold">Take a deep dive in the world of Clinical Research with us</h1>
                <div className="services-cards-box">
                    <div className="services-card">
                        <People />
                        <div className="services-card-content">
                            <h2 className="poppins-bold">One On One Learning</h2>
                            <p className="poppins-reg">Get personalied guidance from an experienced data manager.</p>
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
                <div className="course-card-box">
                    <div className="section-icon-box">
                        <Logo />
                    </div>
                    <h1 className="poppins-bold">Course Structure</h1>
                    <p className="poppins-reg">The course covers the basics of Clinical Data Management (CDM) and then expands on the techniques employed by professionals.</p>
                    <div className="course-intro-box">
                        <div className="course-info-card">
                            <div className="course-info-card-img-box">
                                <div className="course-info-card-icon-box">
                                    <div className="course-info-card-icon-border-box">
                                        <Syllabus />
                                    </div>
                                </div>
                                <p className="poppins-reg">Preview Coming Soon</p>
                            </div>
                            <div className="course-info-card-content-box">
                                <h2 className="poppins-bold">Introduction</h2>
                                <p className="poppins-reg">What is CDM, why it is needed preview of what you will learn in the course.</p>
                            </div>
                        </div>
                        <div className="course-info-card">
                            <div className="course-info-card-img-box">
                                <div className="course-info-card-icon-box">
                                    <div className="course-info-card-icon-border-box">
                                        <Syllabus />
                                    </div>
                                </div>
                                <p className="poppins-reg">Preview Coming Soon</p>
                            </div>
                            <div className="course-info-card-content-box">
                                <h2 className="poppins-bold">Tools &#x26; Tutorial</h2>
                                <p className="poppins-reg">Introduction and hands-on training of the commonly used tools in a CDM project.</p>
                            </div>
                        </div>
                        <div className="course-info-card">
                            <div className="course-info-card-img-box">
                                <div className="course-info-card-icon-box">
                                    <div className="course-info-card-icon-border-box">
                                        <Syllabus />
                                    </div>
                                </div>
                                <p className="poppins-reg">Preview Coming Soon</p>
                            </div>
                            <div className="course-info-card-content-box">
                                <h2 className="poppins-bold">Project Phase 1: Start Up Phase</h2>
                                <p className="poppins-reg">Introduction to various specifications and steps taken at the start of a CDM project.</p>
                            </div>
                        </div>
                        <div className="course-info-card">
                            <div className="course-info-card-img-box">
                                <div className="course-info-card-icon-box">
                                    <div className="course-info-card-icon-border-box">
                                        <Syllabus />
                                    </div>
                                </div>
                                <p className="poppins-reg">Preview Coming Soon</p>
                            </div>
                            <div className="course-info-card-content-box">
                                <h2 className="poppins-bold">Project Phase 2: Conduct Phase</h2>
                                <p className="poppins-reg">Explanation and hands-on training of the daily activities required in a CDM project.</p>
                            </div>
                        </div>
                        <div className="course-info-card">
                            <div className="course-info-card-img-box">
                                <div className="course-info-card-icon-box">
                                    <div className="course-info-card-icon-border-box">
                                        <Syllabus />
                                    </div> 
                                </div>
                                <p className="poppins-reg">Preview Coming Soon</p>
                            </div>
                            <div className="course-info-card-content-box">
                                <h2 className="poppins-bold">Project Phase 3: Close Out Phase</h2>
                                <p className="poppins-reg">Highlights the procedures &#x26; protocols followed while closing a CDM project.</p>
                            </div>
                        </div>
                        <div className="course-info-card">
                            <div className="course-info-card-img-box">
                                <div className="course-info-card-icon-box">
                                    <div className="course-info-card-icon-border-box">
                                        <Syllabus />
                                    </div>
                                </div>
                                <p className="poppins-reg">Preview Coming Soon</p>
                            </div>
                            <div className="course-info-card-content-box">
                                <h2 className="poppins-bold">Best Practises &#x26; Intrview Guide</h2>
                                <p className="poppins-reg">A guide to enhancing your CDM workflow and how to get a job as a data manager.</p>
                            </div>
                        </div>
                    </div>
                    <div className="section-btn-box">
                        <Link to={ '/course' } className="poppins-bold btn btn-primary-white">More Course Details</Link>
                    </div>
                </div>
            </section>
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
