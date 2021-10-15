import React, {Fragment, useState} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import { Link } from 'react-router-dom'

import cimg1 from '../../images/cart/img-1.png'
import cimg2 from '../../images/cart/img-2.png'
import cimg3 from '../../images/cart/img-3.png'
import cimg4 from '../../images/cart/img-4.png'
import cimg5 from '../../images/cart/img-5.png'


const WishlistPage =() => {

    const Cart = [
        {
            CartImg:cimg1,
            title:'Mango Flower Honey',
            brand:'Thoney',
            size:'Small jar',
            price:'$ 250',
            stock:'In Stock',
        },
        {
            CartImg:cimg2,
            title:'Black Seed Flower Honey',
            brand:'Thoney',
            size:'medium',
            price:'$ 350',
            stock:'Stock Out',
        },
        {
            CartImg:cimg3,
            title:'Pure Hill Honey',
            brand:'Thoney',
            size:'Small jar',
            price:'$ 250',
            stock:'In Stock',
        },
        {
            CartImg:cimg4,
            title:'Manuka Honey',
            brand:'Thoney',
            size:'medium',
            price:'$ 250',
            stock:'Stock Out',
        },
        {
            CartImg:cimg5,
            title:'Wildflower Honey',
            brand:'Thoney',
            size:'Lerge',
            price:'$ 450',
            stock:'In Stock',
        },
    ]


    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Wishlist'} pagesub={'Wishlist'}/> 
            <div className="cart-area section-padding">
                <div className="container">
                    <div className="form">
                        <div className="cart-wrapper">
                            <div className="row">
                                <div className="col-12">
                                    <form action="cart">
                                        <table className="table-responsive cart-wrap">
                                            <thead>
                                                <tr>
                                                    <th className="images images-b">Image</th>
                                                    <th className="product-2">Product Name</th>
                                                    <th className="ptice">Price</th>
                                                    <th className="pr">Stock Status</th>
                                                    <th className="remove remove-b">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Cart.map((catItem, crt) => (
                                                    <tr key={crt}>
                                                        <td className="images"><img src={catItem.CartImg} alt=""/></td>
                                                        <td className="product">
                                                            <ul>
                                                                <li className="first-cart">{catItem.title}</li>
                                                                <li>Brand : {catItem.brand}</li>
                                                                <li>Size : {catItem.size}</li>
                                                            </ul>
                                                        </td>
                                                        <td className="ptice">{catItem.price}</td>
                                                        <td className="stock">{catItem.stock}</td>
                                                        <td className="action">
                                                            <ul>
                                                                    <li className="c-btn"><Link data-bs-toggle="tooltip" data-bs-html="true" title="Add to Cart" to="/wishlist"><i className="fi flaticon-shopping-cart"></i></Link></li>
                                                                <li className="w-btn"><Link data-bs-toggle="tooltip" data-bs-html="true" title="Remove from Cart" to="/wishlist"><i className="fi flaticon-delete"></i></Link></li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default WishlistPage;
