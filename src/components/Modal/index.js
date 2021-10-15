
import React, {Fragment, useState} from 'react';

import { Link } from 'react-router-dom'

import mdl from '../../images/modal2.jpg'
import md2 from '../../images/bee2.png'

import { Button, Dialog, Grid, } from '@material-ui/core'

const DefaultModal = ({ maxWidth, button, buttonClass }) => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    const [qty, setQty] = useState(1);

    return (
        <Fragment>
            <Button
                className={`btn ${buttonClass}`}
                onClick={handleClickOpen}>
                {button}
                <i className="fi ti-eye"></i>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body">
                    <div className="product-details">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="product-single-img">
                                        <div className="modal-product">
                                            <div className="item">
                                                <img src={mdl} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="product-single-content">
                                        <h5>Queen Bee Honey</h5>
                                        <h6>350.00 USD</h6>
                                        <ul className="rating">
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis ultrices
                                            lectus lobortis, dolor et tempus porta, leo mi efficitur ante, in varius
                                            felis
                                            sem ut mauris. Proin volutpat lorem inorci sed vestibulum tempus. Lorem
                                            ipsum
                                            dolor sit amet, consectetur adipiscing elit. Aliquam
                                            hendrerit.
                                        </p>
                                        <div className="product-filter-item color">
                                            <div className="color-name">
                                                <span>Color :</span>
                                                <ul>
                                                    <li className="color1"><input id="1" type="radio" name="color" value="30"/>
                                                        <label htmlFor="1"></label>
                                                    </li>
                                                    <li className="color2"><input id="2" type="radio" name="color" value="30"/>
                                                        <label htmlFor="2"></label>
                                                    </li>
                                                    <li className="color3"><input id="3" type="radio" name="color" value="30"/>
                                                        <label htmlFor="3"></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-filter-item color filter-size">
                                            <div className="color-name">
                                                <span>Weight :</span>
                                                <ul>
                                                    <li className="color"><input id="w1" type="radio" name="size" value="30"/>
                                                        <label htmlFor="w1">4L</label>
                                                    </li>
                                                    <li className="color"><input id="w2" type="radio" name="size" value="30"/>
                                                        <label htmlFor="w2">2L</label>
                                                    </li>
                                                    <li className="color"><input id="w3" type="radio" name="size" value="30"/>
                                                        <label htmlFor="w3">500ML</label>
                                                    </li>
                                                    <li className="color"><input id="w4" type="radio" name="size" value="30"/>
                                                        <label htmlFor="w4">200ML</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="pro-single-btn">
                                            <Grid className="quantity cart-plus-minus">
                                                <Button className="dec qtybutton" onClick={() => setQty(qty <= 1 ? 1 : qty - 1)}>-</Button>
                                                <input
                                                    value={qty}
                                                    onChange={() => setQty(qty)}
                                                    type="text"/>
                                                <Button className="inc qtybutton" onClick={() => setQty(qty + 1)}>+</Button>
                                            </Grid>
                                            <Link onClick={ClickHandler} to="/product-single" className="theme-btn">Add to cart</Link>
                                        </div>
                                        <div className="social-share">
                                            <span>Share with : </span>
                                            <ul className="socialLinks">
                                                <li><Link to='/'><i className="fa fa-facebook"></i></Link></li>
                                                <li><Link to='/'><i className="fa fa-linkedin"></i></Link></li>
                                                <li><Link to='/'><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to='/'><i className="fa fa-instagram"></i></Link></li>
                                                <li><Link to='/'><i className="fa fa-youtube-play"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="m-shape">
                                            <img src={md2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default DefaultModal

