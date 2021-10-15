import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import BlogSingle from '../../components/BlogDetails'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogDetails =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogSingle/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetails;
