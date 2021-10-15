import React, { Component } from 'react'
import Logo from '../../images/logo-main.png'
// import {Link}  from 'react-router-dom'
import { Link } from 'react-scroll'
import MobileMenu from '../../components/MobileMenu'


export default class Header extends Component {

    state = {
        isSearchShow: false,
    }

    searchHandler = () => {
        this.setState({
            isSearchShow: !this.state.isSearchShow
        })
    }

    

    
    
    render(){
        const {isSearchShow} = this.state;

        const SubmitHandler = (e) =>{
            e.preventDefault()
         }

         const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }
       return(	
        <header id="header" className="wpo-site-header">
            <nav className="navigation navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                            <div className="mobail-menu">
                                <MobileMenu/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6">
                            <div className="navbar-header">
                                <Link to="home" spy={true} smooth={true} className="navbar-brand"><img style={{"max-width": "150px"}} src={Logo}
                                        alt=""/></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-1 col-1">
                            <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                <button className="menu-close"><i className="ti-close"></i></button>
                                <ul className="nav navbar-nav mb-2 mb-lg-0">
                                    <li className="menu-item-has-children">
                                        <Link to="strategy" spy={true} smooth={true}>Strategy</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link activeClass="active" to="about" spy={true} smooth={true}>About us</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link to="investments" spy={true} smooth={true}>Investments</Link>
                                       
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link to="team" spy={true} smooth={true}>Team</Link>
                                        
                                    </li>
                                    <li><Link to="contacts" spy={true} smooth={true}>Contacts</Link></li>
                                </ul>
        
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-2">
                            <div className="header-right">
                                <div className="close-form">
                                    <Link to="contacts" spy={true} smooth={true} className="theme-btn">Get in touch</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
       )
   }
}
