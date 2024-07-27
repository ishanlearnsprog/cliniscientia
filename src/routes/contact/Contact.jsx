import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Call from '../../components/svg/Call.jsx'
import Mail from '../../components/svg/Mail.jsx'
import './Contact.css'

export default function Contact() {
    const [ formData, setFormData ] = useState({ name: '', email: '', mobileNo: '' })
    const [ loading, setLoading ] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        
        setLoading(true)

        try {
            const res = await fetch(import.meta.env.VITE_MAILER_URL, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' }
            })

            const status = res.status
            const data = await res.json()
        
            if (res.status === 200) {
                toast.success( data.msg )
            } else {
                toast.error( data.msg )
            }
        } catch (err) {
            toast.error('There was an error. Please try again later.')
        }

        setLoading(false)
    }
    
    return (
        <div className="contact-wrapper">
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
                            onChange={ (e) => setFormData({ ...formData, name: e.target.value }) }
                            required/>
                        </div>
                        <div className="form-input-box">
                            <input 
                            className="poppins-reg"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={ formData.email }
                            onChange={ (e) => setFormData({ ...formData, email: e.target.value }) }
                            required/>
                        </div>
                        <div className="form-input-box"> 
                            <input 
                            className="poppins-reg"
                            type="text"
                            name="mobileNo"
                            placeholder="Your Phone"
                            value={ formData.mobileNo }
                            onChange={ (e) => setFormData({ ...formData, mobileNo: e.target.value }) }
                            required/>
                        </div>
                        { loading ? (<button className="poppins-bold btn btn-primary-white" type="submit" disabled>Submit</button>) : (<button className="poppins-bold btn btn-primary-white" type="submit">Submit</button>) }
                    </form>
                    { loading && (
                        <div className="loading-screen">
                            <div className="loading-wrapper">
                                <div class="lds-dual-ring"></div>
                                <p className="poppins-reg">Sending</p>
                            </div>
                        </div>
                    )}
                    <ToastContainer
                        position="bottom-center"
                        autoClose={3000}
                        hideProgressBar={true}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                        limit={3}
                        transition: Bounce />
                </div>
            </section>
            <section className="contact-details-box">
                <div className="contact-details-wrapper">
                    <h1 className="poppins-bold">Get in touch with us</h1>
                    <p className="poppins-reg">Ready to embark on your journey in Clinical Data Management (CDM)? We're here to support you every step of the way! Whether you have questions about our course options, need guidance on starting your CDM career, or simply want to connect with the Clini Scientia community, we encourage you to reach out.</p>
                    <div className="contact-detail-cards">
                        <div className="contact-detail-card">
                            <div className="contact-detail-icon">
                                <Call />
                            </div>
                            <div className="contact-detail-content">
                                <h2 className="poppins-med">Phone Number</h2>
                                <p className="poppins-reg">{ import.meta.env.VITE_PHONENO }</p>
                            </div>
                        </div>
                        <div className="contact-detail-card">
                            <div className="contact-detail-icon">
                                <Mail />
                            </div>
                            <div className="contact-detail-content">
                                <h2 className="poppins-med">Email Address</h2>
                                <p className="poppins-reg">{ import.meta.env.VITE_EMAIL }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
