import React, {Fragment, useState} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import { Button, Grid, } from '@material-ui/core'
import { Link } from 'react-router-dom'

import cimg1 from '../../images/cart/img-1.png'
import cimg2 from '../../images/cart/img-2.png'
import cimg3 from '../../images/cart/img-3.png'
import cimg4 from '../../images/cart/img-4.png'
import cimg5 from '../../images/cart/img-5.png'


const CartPage =() => {

    const Cart = [
        {
            CartImg:cimg1,
            title:'Mango Flower Honey',
            brand:'Thoney',
            size:'Small jar',
            price:'$ 250',
            total:'$ 250',
        },
        {
            CartImg:cimg2,
            title:'Black Seed Flower Honey',
            brand:'Thoney',
            size:'medium',
            price:'$ 350',
            total:'$ 350',
        },
        {
            CartImg:cimg3,
            title:'Pure Hill Honey',
            brand:'Thoney',
            size:'Small jar',
            price:'$ 250',
            total:'$ 250',
        },
        {
            CartImg:cimg4,
            title:'Manuka Honey',
            brand:'Thoney',
            size:'medium',
            price:'$ 250',
            total:'$ 250',
        },
        {
            CartImg:cimg5,
            title:'Wildflower Honey',
            brand:'Thoney',
            size:'Lerge',
            price:'$ 450',
            total:'$ 450',
        },
    ]


    const [qty, setQty] = useState(1);

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Cart'} pagesub={'Cart'}/> 
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
                                                    <th className="pr">Quantity</th>
                                                    <th className="ptice">Price</th>
                                                    <th className="stock">Total Price</th>
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
                                                        <td className="stock">
                                                            <div className="pro-single-btn">
                                                                <Grid className="quantity cart-plus-minus">
                                                                    <Button className="dec qtybutton" onClick={() => setQty(qty <= 1 ? 1 : qty - 1)}>-</Button>
                                                                    <input
                                                                        value={qty}
                                                                        onChange={() => setQty(qty)}
                                                                        type="text"/>
                                                                    <Button className="inc qtybutton" onClick={() => setQty(qty + 1)}>+</Button>
                                                                </Grid>
                                                            </div>
                                                        </td>
                                                        <td className="ptice">{catItem.price}</td>
                                                        <td className="stock">{catItem.total}</td>
                                                        <td className="action">
                                                            <ul>
                                                                <li className="w-btn"><Link data-bs-toggle="tooltip" data-bs-html="true" title="Remove from Cart" to="/cart"><i className="fi flaticon-delete"></i></Link></li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </form>
                                    <div className="submit-btn-area">
                                        <ul>
                                            <li><Link onClick={ClickHandler} className="theme-btn" to="/shop">Continue Shopping <i className="fa fa-angle-double-right"></i></Link></li>
                                            <li><button type="submit">Update Cart</button></li>
                                        </ul>
                                    </div>
                                    <div className="cart-product-list">
                                        <ul>
                                            <li>Total product<span>( 05 )</span></li>
                                            <li>Sub Price<span>$2250</span></li>
                                            <li>Vat<span>$50</span></li>
                                            <li>Eco Tax<span>$100</span></li>
                                            <li>Delivery Charge<span>$100</span></li>
                                            <li className="cart-b">Total Price<span>$2500</span></li>
                                        </ul>
                                    </div>
                                    <div className="submit-btn-area">
                                        <ul>
                                            <li><Link onClick={ClickHandler} className="theme-btn" to="/checkout">Proceed to Checkout <i className="fa fa-angle-double-right"></i></Link></li>
                                        </ul>
                                    </div>
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
export default CartPage;
