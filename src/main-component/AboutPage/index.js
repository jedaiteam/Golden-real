import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import About from '../../components/about'
import Services2 from '../../components/Services2'
import Pricing from '../../components/Pricing'
import FunFact from '../../components/FunFact'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const AboutPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <About abClass={'wpo-about-section-s2'}/>
            <Services2 srvClass={'wpo-service-section-s3'}/>
            <Pricing/>
            <FunFact fnClass={'section-padding'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
