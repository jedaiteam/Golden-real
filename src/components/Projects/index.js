import React from 'react'
// import {Link} from 'react-router-dom'

// import prjImg1 from '../../images/img1.jpg'
// import prjImg2 from '../../images/img2.jpg'
import prjImg3 from '../../images/img3.jpeg'
import prjImg4 from '../../images/1517602717572.jfif'


const Projects = (props) => {
    // const ClickHandler = () =>{
    //     window.scrollTo(10, 0);
    //  }


     const projects = [
         {
            pImg:prjImg4,
            title:'Simon Rossmann',
            desc: 'Managing Partner',  
            link:'https://www.linkedin.com/in/simon-rossmann-ab644011a/',
            mail: 'sr@g-l.berlin'
         },
         {
            pImg:prjImg3,
            title:'Clemens Frania', 
            desc: 'Managing Partner',    
            link:'https://www.linkedin.com/in/clemens-frania-172b1291/',
            mail: 'clf@g-l.berlin'
         },
         
     ]


    return(
        <section className="wpo-gallery-section section-padding" id="team">
            {/* <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-8">
                        <div className="wpo-section-title">
                            <span>Projects</span>
                            <h2>Our Project Gallery</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-4">
                        <div className="wpo-section-title-button">
                            <Link onClick={ClickHandler} to="/project">More Projects</Link>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="row">
                <div className="col-lg-5 col-sm-8">
                        <div className="wpo-section-title">
                            {/* <span>Projects</span> */}
                            <h2>Our Team</h2>
                            <p>Golden Light's Investment Experts</p>
                        </div>
                    </div>
                    <div className="col col-xs-12 col-lg-7 sortable-gallery">
                        <div className="wpo-gallery-container">
                            {projects.map((projects, pritem) => (
                                <div className="grid" key={pritem}>
                                    <div className="wpo-gallery-item">
                                        {/* <Link onClick={ClickHandler} to="/project-single"> */}
                                            <img src={projects.pImg} alt="" className="img img-responsive"/>
                                            <div className="wpo-gallery-text">
                                                <h3>{projects.title}</h3>
                                                <p>{projects.desc}</p>
                                                <div className="icon">
                                                    <a href={`mailto:${projects.mail}`}><i className="fi flaticon-send"></i></a>
                                                    <a href={projects.link}><i className="ti-linkedin"></i></a>
                                                </div>
                                            </div>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Projects;