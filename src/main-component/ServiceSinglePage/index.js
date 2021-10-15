import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import ServiceSingleSection from '../../components/ServiceSingleSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ServiceSinglePage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Strategy and Planning'} pagesub={'Services'}/> 
            <ServiceSingleSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServiceSinglePage;
