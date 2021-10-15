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


const OrderHistory =() => {

    const Cart = [
        {
            OrderId:'# 8976A',
            date:'05 : 08 : 2021',
            qty:'06',
            st:'Alex Genderia',
            tpice:'$405',
            stock:'In Stock',
            atclass:'Del',
        },
        {
            OrderId:'# 8976A',
            date:'07 : 08 : 2021',
            qty:'06',
            st:'Alex Genderia',
            tpice:'$405',
            stock:'Stock Out',
            atclass:'stock',
        },
        {
            OrderId:'# 8976A',
            date:'05 : 08 : 2021',
            qty:'06',
            st:'Alex Genderia',
            tpice:'$405',
            stock:'In Stock',
            atclass:'stock',
        },
        {
            OrderId:'# 8976A',
            date:'09 : 08 : 2021',
            qty:'06',
            st:'Alex Genderia',
            tpice:'$405',
            stock:'Stock Out',
            atclass:'can',
        },
        {
            OrderId:'# 8976A',
            date:'10 : 08 : 2021',
            qty:'06',
            st:'Alex Genderia',
            tpice:'$405',
            stock:'In Stock',
            atclass:'pro',
        },
    ]


    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Order History'} pagesub={'Order'}/> 
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
                                                    <th className="product-2">Date</th>
                                                    <th className="ptice">Quantity</th>
                                                    <th className="pr">Ship To</th>
                                                    <th className="pr">Total Price</th>
                                                    <th className="pr">Status</th>
                                                    <th className="remove remove-b">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Cart.map((catItem, crt) => (
                                                    <tr key={crt}>
                                                        <td className="images">{catItem.OrderId}</td>
                                                        <td className="product">
                                                            <ul>
                                                                <li className="first-cart">{catItem.date}</li>
                                                            </ul>
                                                        </td>
                                                        <td className="ptice">{catItem.qty}</td>
                                                        <td className="ptice">{catItem.st}</td>
                                                        <td className="stock">{catItem.tpice}</td>
                                                        <td className={catItem.atclass}><span>{catItem.stock}</span></td>
                                                        <td className="action">
                                                            <ul>
                                                                <li className="w-btn-view"><Link data-bs-toggle="tooltip" data-bs-html="true" title="View" to="/wishlist"><i className="fi ti-eye"></i></Link></li>
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
export default OrderHistory;
