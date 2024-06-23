import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import background from '../../assets/images/background.png'
import Clock from '../../components/svg/Clock.jsx'
import './Home.css'

export default function Home() {
    return (
        <Fragment>
        <section id="introduction">
            <div className="background-img-box"></div>
            <div className="introduction-content-box">
                <div className="introduction-content-wrapper">
                    <h1>Learn Clinical Data Management & Clinical Research</h1>
                    <p>Launch your career in Clinical Data Management with Clini Scientia's comprehensive one-on-one course taught by an experienced data manager.</p>
                    <a href="#cdmintro" className="journey-btn">Start your CDM Journey</a>
                    <Link to={ 'contact' } className="introduction-cta">Connect with our instructor</Link>
                </div>
            </div>
        </section>
        <section id="cdmintro">
            <div className="cdmintro-wrapper">
                <h1>What is Clinical Data Management?</h1>
                <p>Clinical Data Management (CDM) is the process of collecting, processing and safeguarding data produced by clinical trials and medical research studies.</p>
                <p>Reliable and accurate data is crucial for drawing accurate conclusions from clinical trials. Without trustworthy data, the results of a clinical research may lead to misleading conclusions and risk patient safety.</p>
                <p>CDM professionals ensure the quality and integrity of data produced in research findings, leading to more robust medical evidence for developing new treatments and improving patient care.</p>
                
                <h1>Why pursue a career in CDM?</h1>
                <ul>
                    <li><span style={{ fontWeight: 700 }}>Stable and Growing Field:</span> The demand for skilled CDM professionals is high and expected to continue growing due to the ongoing development of new medical therapies.</li>
                    <li><span style={{ fontWeight: 700 }}>Lucrative Career Path:</span> CDM professionals typically earn competitive salaries with opportunities for advancement and specialization.</li>
                    <li><span style={{ fontWeight: 700 }}>Transferable Skills:</span> The skills you gain in CDM, like data analysis, attention to detail, and project management, are valuable across various industries.</li>
                    <li><span style={{ fontWeight: 700 }}>Remote Work Opportunities:</span> Many CDM positions offer remote work flexibility, allowing for a better work-life balance.</li>
                </ul>
                <div className="journey-nav-box">
                    <a href="#benefits" className="journey-btn-alt hide-btn">How we can help?</a>
                </div>
            </div>
        </section>
        <section id="benefits">
            <div className="benefits-wrapper">
                <h1>Take a deep dive in the world of CDM with us</h1>
                <div className="benefits-box">
                    <div className="benefits-card">
                        <h2>One-on-One Learning</h2>
                        <p>Get personalized guidance, in-depth explanations and targeted feedback from an experienced data manager.</p>
                    </div>
                    <div className="benefits-card">
                        <h2>Comprehensive Curriculum</h2>
                        <p>Covers the basics of CDM and then expands upon the techniques and best practises employed by professionals.</p>
                    </div>
                    <div className="benefits-card">
                        <h2>Online Classes</h2>
                        <p>Leave behind the hassle of commuting and participate in classes from anywhere with an internet connection.</p>
                    </div>
                    <div className="benefits-card">
                        <h2>Flexible Timings</h2>
                        <p>Structure your learning around your schedule, whether it's studying in the mornings, evenings, or on weekends.</p>
                    </div>
                </div>
                <div className="benefits-course-box">
                    <div>
                        <p>We offer a unique learning experience with one-on-one teaching, allowing you to receive personalized guidance tailored to your specific needs, learning style and prior knowledge. The course is structured such that it aligns with the industry trends and emphasizes practical skill development through real-world examples and hands-on projects. Plus, with flexible timings and online classes, you can make your studies to fit your busy schedule and learn at your own pace.</p>
                        <div className="journey-nav-box">
                            <Link to={ 'course' } className="journey-btn-alt">More about our course</Link>
                            <a href="#reviews" className="journey-btn-alt hide-btn">Hear from our students</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="reviews">
            <div className="reviews-wrapper">
                <div className="review-box">
                    <h1>Hear from our students</h1>
                    <div className="review-card">
                        <div className="review-card-header">
                            <h2>Ishan Rajendra</h2>
                            <h2>4&#9733;</h2>
                        </div>
                        <p>"If you're looking for a well-structured program to launch your CDM career, this course definitely delivers."</p>
                    </div>
                    <div className="review-card">
                        <div className="review-card-header">
                            <h2>Kaustubh Singh</h2>
                            <h2>5&#9733;</h2>
                        </div>
                        <p>"I've implemented several strategies learned in the course, and I've noticed a significant improvement in my data management workflow."</p>
                    </div>
                    <div className="review-card">
                        <div className="review-card-header">
                            <h2>Rahul Gupta</h2>
                            <h2>4&#9733;</h2>
                        </div>
                        <p>"Busy professionals can learn on their own terms with this course's online format, comprehensive materials and the instructor's guidance."</p>
                    </div>
                </div>
                <div className="cta-box">
                    <p>We at Clini Scientia aim to provide you with the neccessary skillset to explore and build a career in the field of Clinical Research with Clinical Data Management. Start your professional journey with us!</p>
                    <p className="contact-info">For more details:<br />
                    Contact us at: +91 93050 76732<br />
                    Email us at: ishanlearnsprog@gmail.com</p>
                    <p>You can also book a call with our instructor to discuss about the course syllabus, hands-on training, class timings and fee structure.</p>
                    <div className="journey-nav-box">
                        <Link to={ 'contact' } className="journey-btn-alt">Connect with our instructor</Link>
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    )
}
