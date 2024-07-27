import { useState } from 'react'
import { Link } from 'react-router-dom'

import EndContact from '../../components/endcontact/EndContact.jsx'
import Plus from '../../components/svg/Plus.jsx'
import Minus from '../../components/svg/Minus.jsx'
import Like from '../../components/svg/Like.jsx'
import Clock from '../../components/svg/Clock.jsx'
import People from '../../components/svg/People.jsx'
import Language from '../../components/svg/Language.jsx'
import companies from '../../assets/images/companies.png'
import companies2 from '../../assets/images/companies2.png'
import './Course.css'

export default function Course() {

    const moduleDetails = [
        {
            title: 'Introduction',
            subtitle: 'Introduction to CDM, why it is needed and preview of what comes next in the course.',
            topics: [
                'Introduction to CDM',
                'Why it is needed?',
                'Future Opportunities',
                'Introduction to important terminology'
            ]
        },
        {
            title: 'Tools & Tutorial',
            subtitle: 'Introduction and hands-on training of the commonly used tools in a CDM project.',
            topics: [
                'Introduction to Excel',
                'Macros & VBA',
                'Useful techniques'
            ]
        },
        {
            title: 'Project Phase 1: Start Up Phase',
            subtitle: 'Introduction to various specifications and steps taken at the start of a CDM project.',
            topics: [
                'Protocols',
                'Database Specification (eCRF design)',
                'UAT Database Specification',
                'eCRF Completion Guidelines',
                'Data Validation Specification',
                'UAT of Data Validation Specification',
                'Source Data Verification',
                'Data Management Plan',
                'Medical Coding'
            ]
        },
        {
            title: 'Project Phase 2: Conduct Phase',
            subtitle: 'Explanation and hands-on training of the daily activities required in a CDM project.',
            topics: [
                'Query Writing',
                'Data Entry',
                'Listing Review',
                'Discpepency Management',
                'External Data Review',
                'SAE Reconciliation',
                'Protocol Amendment'
            ]
        },
        {
            title: 'Project Phase 3: Close Out Phase',
            subtitle: 'Highlights the procedures & protocols followed while closing a CDM project.',
            topics: [
                'Site Closing Activity',
                'CD Archival',
                'Revoking Access',
                'Types of Locks',
                'SAE Reconciliation',
                'Database Lock and Unlock Procedures'
            ]
        },
        {
            title: 'Best Practises & Interview Guide',
            subtitle: 'A guide to enhancing your CDM workflow and how to get a job as a data manager.',
            topics: [
                'Best practises',
                'Career guidance',
                'Interview preparation'
            ]
        }
    ]

    const [ showModuleBody, setShowModuleBody ] = useState(Array(moduleDetails.length).fill(false))

    function toggleModuleDetails(index) {
        let moduleBodies = showModuleBody
        for ( let i = 0; i < moduleBodies.length; i++ ) {
            if ( i === index ) {
                moduleBodies[i] = !moduleBodies[i]
            } else {
                moduleBodies[i] = false
            }
        }
        setShowModuleBody([ ...moduleBodies ])
    }

    const moduleDetailsList = moduleDetails.map((mod, index) => {
        return (
            <div key={ index } className="module-details-box">
                <div className="module-header-box" onClick={ () => toggleModuleDetails(index) }>
                    <h2 className="poppins-med">{ mod.title }</h2>
                    <div className="toogle-module-icon">{ showModuleBody[index] ? <Minus /> : <Plus /> }</div>
                </div>
                { showModuleBody[index] && (
                    <div className="module-body-box">
                        <p className="poppins-reg">{ mod.subtitle }</p>
                        <p className="poppins-reg">Topics included in the module:</p>
                        <ul>
                            { mod.topics.map(( topic, index ) => <li key={ index } className="poppins-reg">{ topic }</li>) }
                        </ul>
                    </div>
                )}
            </div>
        )
    })

    return (
        <>
            
            <section className="hero-box">
                <div className="hero-wrapper">
                    <div className="hero-content-box">
                        <div className="hero-title-box">
                            <p className="poppins-reg">Clini Scientia's</p>
                            <h1 className="poppins-bold">Clinical Data Management</h1>
                        </div>
                        <div className="hero-details-box">
                            <div className="hero-details">
                                <Like />
                                <p className="poppins-reg"><span className="poppins-bold">100%</span> (66 reviews)</p>
                            </div>
                            <div className="hero-details">
                                <People />
                                <p className="poppins-reg">Personal Tutor</p>
                            </div>
                            <div className="hero-details">
                                <Clock />
                                <p className="poppins-reg">Flexible Timings</p>
                            </div>
                            <div className="hero-details">
                                <Language />
                                <p className="poppins-reg">Taught in English or Hindi</p>
                            </div>
                        </div>
                        <Link to={ '/contact' } className="poppins-bold btn btn-primary-white">Book a trial class</Link>
                    </div>
                </div>
            </section>
            <section className="eligibility-box">
                <h1 className="poppins-bold">This course is best suited for</h1>
                <div className="eligibility-wrapper">
                    <div className="eligibility-left-box">
                        <p className="poppins-reg"><span style={{ fontWeight: '500' }}>MBBS, BDS, BAMS, BHMS</span> students and students currently pursuing graduate and post-graduate qualifications in medical and allied fields.</p>
                        <p className="poppins-reg">Professionals working in the health and pharmaceutical sector intrested in clinical research.</p>
                    </div>
                    <div className="eligibility-right-box">
                        <p className="poppins-reg">Student pursuing Pharmacy <span style={{ fontWeight: '500' }}>(B Pharm, M Pharm, Pharm D)</span>, Life Sciences <span style={{ fontWeight: '500' }}>(BSc, MSc)</span>, Engineering <span style={{ fontWeight: '500' }}>(BE, B Tech, M Tech in Biotechnology)</span>.</p>
                        <p className="poppins-reg">Professionals engaged in clinical research and related operations.</p>
                    </div>
                </div>
            </section>
            <section className="modules-box">
                <div className="modules-intro-box">
                    <h1 className="poppins-bold">The course is divided into 6 modules.</h1>
                    <p className="poppins-reg">The first two modules of the course cover the basics required to work in a CDM project. They build the foundation for the beginner learner and act as a revision for the advanced learner.</p>
                    <p className="poppins-reg">The other four modules cover the project lifecycle of a CDM project. The course has been structured to allow the beginner learner to gain familiarity with the the project while the advanced learner will hopefully find helpful ideas to optimize their own workflows.</p>
                </div>
                <div className="modules-list-box">
                    { moduleDetailsList }
                </div>
            </section>
            <section className="placement-box">
                <h1 className="poppins-reg">Our alumini work with <span className="poppins-bold">10+</span> leading CRO, KPO and Pharma companies</h1>
                <div className="placement-img-box">
                    <img src={ companies } className="placement-imga" />
                    <img src={ companies2 } className="placement-imgb" />
                </div>
            </section>
            <EndContact title={ 'Go from being a beginner to an expert with Clini Scientia' } subtitle={ 'We at Clini Scientia aim to equip you with the neccesary skills to build a successful career in Clinical Research.' } />
        </>
    )
}
