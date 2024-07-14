import { useState } from 'react'

import Call from '../../components/svg/Call.jsx'
import Mail from '../../components/svg/Mail.jsx'
import './Contact.css'

export default function Contact() {

    const [ formData, setFormData ] = useState({ name: '', email: '', phoneNo: '' })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }
    
    return (
        <>
            <section className="contact-form-box">
                <div className="trial-class-form">
                    <h1 className="poppins-bold">Book A Trial Class</h1>
                    <p className="poppins-reg">Enroll for a trial class and make sure this course right for you. Connect with our instructor to discuss about career options and course details.</p>
                    <form onSubmit={ handleSubmit }>
                        <div className="form-input-box">
                            <input
                            className="poppins-reg"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={ formData.name }
                            onChange={ (e) => setFormData({ ...formData, name: e.target.value }) }/>
                        </div>
                        <div className="form-input-box">
                            <input 
                            className="poppins-reg"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={ formData.email }
                            onChange={ (e) => setFormData({ ...formData, email: e.target.value }) }/>
                        </div>
                        <div className="form-input-box"> 
                            <input 
                            className="poppins-reg"
                            type="text"
                            name="phoneNo"
                            placeholder="Your Phone"
                            value={ formData.phoneNo }
                            onChange={ (e) => setFormData({ ...formData, phoneNo: e.target.value }) }/>
                        </div>
                        <button className="poppins-bold btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </section>
            <section className="contact-details-box">
                <h1 className="poppins-bold">Get in touch with us</h1>
                <p className="poppins-reg">Ready to embark on your journey in Clinical Data Management (CDM)? We're here to support you every step of the way! Whether you have questions about our course options, need guidance on starting your CDM career, or simply want to connect with the Clini Scientia community, we encourage you to reach out.</p>
                <div className="contact-detail-cards">
                    <div className="contact-detail-card">
                        <div className="contact-detail-icon">
                            <Call />
                        </div>
                        <div className="contact-detail-content">
                            <h2 className="poppins-med">Phone Number</h2>
                            <p className="poppins-reg">+91 93050 76732</p>
                        </div>
                    </div>
                    <div className="contact-detail-card">
                        <div className="contact-detail-icon">
                            <Mail />
                        </div>
                        <div className="contact-detail-content">
                            <h2 className="poppins-med">Email Address</h2>
                            <p className="poppins-reg">sishan2811</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
