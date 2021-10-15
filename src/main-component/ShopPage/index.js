import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import ShopPageSection from '../../components/ShopPageSection'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ShopPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'}/> 
            <ShopPageSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ShopPage;
