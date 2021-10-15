import React from 'react'
import {Link} from 'react-router-dom'

// import prjImg1 from '../../images/img1.jpg'
// import prjImg2 from '../../images/img2.jpg'
import prjImg3 from '../../images/img3.jpg'
import prjImg4 from '../../images/img4.jpg'


const Projects = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


     const projects = [
        //  {
        //     pImg:prjImg1,
        //     title:'Digital Analysis',   
        //     link:'/project-single',
        //  },
        //  {
        //     pImg:prjImg2,
        //     title:'Corporate Finance',   
        //     link:'/project-single',
        //  },
         {
            pImg:prjImg3,
            title:'Simon Rossmann',
            desc: 'Managing Partner',  
            link:'https://www.linkedin.com/in/simon-rossmann-ab644011a/',
         },
         {
            pImg:prjImg4,
            title:'Clemens Frania', 
            desc: 'Managing Partner',    
            link:'https://www.linkedin.com/in/clemens-frania-172b1291/',
         },
         
     ]


    return(
        <section className="wpo-gallery-section section-padding">
            <div className="container">
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
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xs-12 sortable-gallery">
                        <div className="wpo-gallery-container">
                            {projects.map((projects, pritem) => (
                                <div className="grid" key={pritem}>
                                    <div className="wpo-gallery-item">
                                        <Link onClick={ClickHandler} to="/project-single">
                                            <img src={projects.pImg} alt="" className="img img-responsive"/>
                                            <div className="wpo-gallery-text">
                                                <h3>{projects.title}</h3>
                                                <p>{projects.desc}</p>
                                                <i className="ti-plus"></i>
                                            </div>
                                        </Link>
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