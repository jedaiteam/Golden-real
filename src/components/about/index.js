import React from 'react'
import {Link} from 'react-scroll'
import abimg from '../../images/2.jpg'
import spimg1 from '../../images/ab-shape-1.png'
import spimg2 from '../../images/ab-shape-2.png'
import spicon from '../../images/icon/badge.svg'



const About = (props) => {
    // const ClickHandler = () =>{
    //     window.scrollTo(10, 0);
    //  }
    return(
        <section className={`wpo-about-section ${props.abClass}`} id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                        <div className="wpo-about-img">
                            <img src={abimg} alt=""/>
                            <div className="wpo-ab-shape-1"><img src={spimg1} alt=""/></div>
                            <div className="wpo-ab-shape-2"><img src={spimg2} alt=""/></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                        <div className="wpo-about-icon">
                            <div className="icon">
                                <img src={spicon} alt=""/>
                                <h1>Golden Light</h1>
                            </div>
                        </div>
                        <div className="wpo-about-icon-content">
                            <p>Golden Light invests in companies with a strong sustainable competitive advantage in the Medical Technology sector.</p>
                            <p> We prefer to invest in companies that just obtained CE marking – or that are close to obtaining it.</p>
                            <p> We create value through strategic advice, network and support in production, quality management
                                as well as commercialization.</p>
                            <p> We actively manage our companies to accelerate further growth and create value to build these into
                                global excellence companies.</p>
                            <p> Our investment team combines wide-ranging managerial and investment experience in the small and
                                mid cap sector.</p>
                            <p> Together with our network of highly experienced international industry experts we support the
                                management of each company in entering new business fields and achieving extraordinary growth.</p>
                                <p>We invest private funds as equity.</p>
                            <p> We pursue a long-term investment strategy with no restrictions by fund regulations.
                                </p>
                            {/* <div className="signeture">
                                <p>Simon Rossmann</p>
                            </div> */}
                            <Link to="contacts" spy={true} smooth={true} className="btn theme-btn" >Get In Touch</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;