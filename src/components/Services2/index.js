import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Services2 extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: true,
            speed: 3000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }



        const service = [
            {
                sIcon: 'fi flaticon-lamp',
                title: 'Strategy and Planning',
                des: 'One way to categorize the activities is in terms ...',
                link: '/service-single',
            },
            {
                sIcon: 'fi flaticon-edit',
                title: 'Corporate Finance',
                des: 'One way to categorize the activities is in terms ...',
                link: '/service-single',
            },
            {
                sIcon: 'fi flaticon-startup',
                title: 'Market Research',
                des: 'One way to categorize the activities is in terms ...',
                link: '/service-single',
            },
            {
                sIcon: 'fi flaticon-business',
                title: 'Business Analysis',
                des: 'One way to categorize the activities is in terms ...',
                link: '/service-single',
            },
            {
                sIcon: 'fi flaticon-trophy',
                title: 'Consumer Markets',
                des: 'One way to categorize the activities is in terms ...',
                link: '/service-single',
            },


        ]
        return (
            <section className={`wpo-service-section section-padding ${this.props.srvClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-section-title">
                                <span>Our Services</span>
                                <h2>Explore Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-service-items wpo-service-slider owl-carousel">
                        <Slider {...settings}>
                            {service.map((service, sitem) => (
                                <div className="col-lg-4 col-md-6 col-12" key={sitem}>
                                    <div className="wpo-service-item">
                                        <div className="wpo-service-icon">
                                            <div className="icon">
                                                <i className={service.sIcon}></i>
                                            </div>
                                        </div>
                                        <div className="wpo-service-text">
                                            <h2><Link onClick={ClickHandler} to={service.link}>{service.title}</Link></h2>
                                            <p>{service.des}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Services2;



