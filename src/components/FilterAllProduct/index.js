import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import ProductGrid from '../ProductGrid'
import ProductList from '../ProductList'


const FilterAllProduct = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }


    return(
        <div className="col-lg-8">
            <div className="shop-section-top-inner">
                <div className="shoping-list">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                           <i className="fa fa-th "></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            <i className="fa fa-list"></i>
                        </NavLink>
                    </NavItem>
                </Nav>
                </div>
                <div className="shoping-product">
                    <span>Showing Products 1 - 9 Of 13 Result</span>
                </div>
                <div className="short-by">
                    <ul>
                        <li>Short By :</li>
                        <li>
                            <select name="show">
                                <option value="">Show 9 Items</option>
                                <option value="">Show 18 Items</option>
                                <option value="">Show 27 Items</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <ProductGrid/>
                </TabPane>

                <TabPane tabId="2">
                    <ProductList/>
                </TabPane>
            </TabContent>
        </div>     
    )
}

export default FilterAllProduct;