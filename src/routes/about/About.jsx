import { Link } from 'react-router-dom'

import EndContact from '../../components/endcontact/EndContact.jsx'
import image3 from '../../assets/images/image3.jpg'
import image4 from '../../assets/images/image4.jpg'
import Logo from '../../components/svg/Logo.jsx'
import './About.css'

export default function About() {
    return (
        <>
            <section className="about-box">
                <div className="about-up-box">
                    <div className="about-up-content-box">
                        <h1 className="poppins-bold">About Us</h1>
                        <p className="poppins-reg">At Clini Scientia, we believe Clinical Data Management (CDM) is the critical engine driving medical progress. It not only insures the saftey of medical innvations but also provide a great opportunity for a rewarding career.</p>
                        <p className="poppins-reg">We have created this course to equip you not only with the technical skills sought after by employers, but also with critical thinking and problem-solving abilities essential for success in CDM. Our instructor is dedicated to supporting your journey every step of the way, and upon completion, you'll be well-prepared to build a successful career in the KPO (Knowledge Process Outsourcing), the CRO (Contract Research Organization) and the Pharmaceutical industry.</p>
                    </div>
                    <div className="about-img-box">
                        <img src={ image3 } />
                    </div>
                </div>
                <div className="about-down-box">
                    <div className="about-down-content-box">
                        <h1 className="poppins-bold">The Problems &#x26; Our Solutions</h1>
                        <p className="poppins-reg">To save your time and allow you to structure your studies around your schedule, we have offered the course in an online format with flexible timings.</p>
                        <p className="poppins-reg">Every person learns differently and for some people sorting through the information available on the Internet might be more difficult than the learning part itself. For those students, we have built our course around our experienced personal instructor who will guide you from beginning to end on your journey to becoming a data manager.</p>
                    </div>
                    <div className="about-img-box">
                        <img src={ image4 } />
                    </div>
                </div>
            </section>
            <EndContact title={ 'Gain expert guidance by our personal instructor' } subtitle={ 'We at Clini Scientia aim to equip you with the neccesary skills to build a successful career in Clinical Research.' }/>
        </>
    )
}
