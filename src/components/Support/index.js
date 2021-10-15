import React from 'react'
import {Link} from 'react-scroll'

const Support = (props) => {
    
    return(
        <section className="wpo-support-section">
            <div className="container">
                <div className="wpo-support-wrapper">
                    <div className="wpo-support-text">
                        <h2>Have You a Different Question?</h2>
                        <p>Please create a ticket to our support forum,a great place to learn, share, and troubleshoot. Get started.</p>
                    </div>
                    <div className="wpo-support-btn">
                        <Link to="contacts" spy={true} smooth={true}>Get In Touch</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support;