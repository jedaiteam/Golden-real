import React from 'react'
import {Link} from 'react-router-dom'

import srvimg1 from '../../images/icon/soering-logo.png'
import srvimg2 from '../../images/icon/diamontech.png'



const Services = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


     const service = [
         {
            sIcon:srvimg1,
            title:'Söring',
            des:'Söring has been manufacturing high-end products for ultrasonic surgery for over 35 years.Söring stands at the global cutting edge of ultrasonic technology offering numerous established applications for liver surgery, neurosurgery and spine surgery as well as for wound treatment. The company has 90 employees and fully integrated production facilities for all its major products. All products are “Made in Germany”',      
            link:'https://www.soering.de/de/',
         },
         {
            sIcon:srvimg2,
            title:'DiaMonTech',
            des:'DiaMonTech AG is a medical technology company that specializes in the development, design and sale of products for medical diagnostics. The patented photothermal diagnostic technology based on infrared lasers enables the precise measurement of relevant blood parameters.',      
            link:'https://www.diamontech.de/',
         },
       
         
     ]


    return(
        <section className="wpo-service-section section-padding" id="investments">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            {/* <span>Our Services</span> */}
                            <h2>Investments</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {service.map((service, sitem) => (
                        <div className="col-lg-6 col-md-6 col-12" key={sitem}>
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <div className="icon">
                                        <Link onClick={ClickHandler} to={service.link}>
                                            <img src={service.sIcon} alt=""/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="wpo-service-text">
                                    {/* <h2><Link onClick={ClickHandler} to={service.link}>{service.title}</Link></h2> */}
                                    <p>{service.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;