import React from 'react'
import FilterSidebar from '../FilterSidebar'
import FilterAllProduct from '../FilterAllProduct'


const ShopPageSection = (props) => {

    return(
        <div className="shop-section">
            <div className="container">
                <div className="row">
                    <FilterSidebar/>
                    <FilterAllProduct/>
                </div>
            </div>
        </div>
    )
}

export default ShopPageSection;