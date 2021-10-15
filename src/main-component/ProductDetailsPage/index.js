import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import ProductSingleSec from '../../components/ProductSingleSec'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ProductDetailsPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Product Single'} pagesub={'Product'}/> 
            <ProductSingleSec/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProductDetailsPage;
