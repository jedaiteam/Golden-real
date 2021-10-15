import React from 'react'


const FilterSidebar = (props) => {

    return(
        <div className="col-lg-4">
            <div className="shop-filter-wrap">
                <div className="filter-item">
                    <div className="shop-filter-item">
                        <h2>Search</h2>
                        <div className="shop-filter-search">
                            <form>
                                <div>
                                    <input type="text" className="form-control" placeholder="Search"/>
                                    <button type="submit"><i className="ti-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="filter-item">
                    <div className="shop-filter-item">
                        <h2>Price</h2>
                        <ul>
                            <li>
                                <label className="topcoat-radio-button__label">
                                    All prices
                                    <input type="radio" name="topcoat"/>
                                    <span className="topcoat-radio-button"></span>
                                </label>
                            </li>
                            <li>
                                <label className="topcoat-radio-button__label">
                                    $50 – $100 (1)
                                    <input type="radio" name="topcoat"/>
                                    <span className="topcoat-radio-button"></span>
                                </label>
                            </li>
                            <li>
                                <label className="topcoat-radio-button__label">
                                    $100 – $200 (21)
                                    <input type="radio" name="topcoat"/>
                                    <span className="topcoat-radio-button"></span>
                                </label>
                            </li>
                            <li>
                                <label className="topcoat-radio-button__label">
                                    $200 – $300 (13)
                                    <input type="radio" name="topcoat"/>
                                    <span className="topcoat-radio-button"></span>
                                </label>
                            </li>
                            <li>
                                <label className="topcoat-radio-button__label">
                                    $300 – $400 (3)
                                    <input type="radio" name="topcoat"/>
                                    <span className="topcoat-radio-button"></span>
                                </label>
                            </li>
                            <li>
                                <label className="topcoat-radio-button__label">
                                    $400 and more (2)
                                    <input type="radio" name="topcoat"/>
                                    <span className="topcoat-radio-button"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="filter-item">
                    <div className="shop-filter-item">
                        <h2>Size</h2>
                        <ul>
                            <li>
                                <label className="topcoat-radio-button__label">
                                    Small Jar
                                    <input type="radio" name="topcoat2"/>
                                    <span className="topcoat-radio-button"></span>
                                </label>
                            </li>
                            <li>
                                <label className="topcoat-radio-button__label">
                                    Large Jar
                                    <input type="radio" name="topcoat2"/>
                                    <span className="topcoat-radio-button"></span>
                                </label>
                            </li>
                            <li>
                                <label className="topcoat-radio-button__label">
                                    Medium Jar
                                    <input type="radio" name="topcoat2"/>
                                    <span className="topcoat-radio-button"></span>
                                </label>
                            </li>
                            <li>
                                <label className="topcoat-radio-button__label">
                                    Extra large Jar
                                    <input type="radio" name="topcoat2"/>
                                    <span className="topcoat-radio-button"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="filter-item">
                    <div className="shop-filter-item color">
                        <h2> Color</h2>
                        <div className="color-name">
                            <ul>
                                <li className="color1"><input id="cl1" type="radio" name="col" value="30"/>
                                    <label htmlFor="cl1"></label>
                                </li>
                                <li className="color2"><input id="cl2" type="radio" name="col" value="30"/>
                                    <label htmlFor="cl2"></label>
                                </li>
                                <li className="color3"><input id="cl3" type="radio" name="col" value="30"/>
                                    <label htmlFor="cl3"></label>
                                </li>
                                <li className="color4"><input id="cl4" type="radio" name="col" value="30"/>
                                    <label htmlFor="cl4"></label>
                                </li>
                                <li className="color5"><input id="cl5" type="radio" name="col" value="30"/>
                                    <label htmlFor="cl5"></label>
                                </li>
                                <li className="color6"><input id="cl6" type="radio" name="col" value="30"/>
                                    <label htmlFor="cl6"></label>
                                </li>
                                <li className="color7"><input id="cl7" type="radio" name="col" value="30"/>
                                    <label htmlFor="cl7"></label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="filter-item">
                    <div className="shop-filter-item">
                        <h2>Brand</h2>
                        <ul>
                            <li>
                                <label className="topcoat-radio-button__label">
                                    Flower
                                    <input type="radio" name="topcoat3"/>
                                    <span className="topcoat-radio-button"></span>
                                </label>
                            </li>
                            <li>
                                <label className="topcoat-radio-button__label">
                                    Hill
                                    <input type="radio" name="topcoat3"/>
                                    <span className="topcoat-radio-button"></span>
                                </label>
                            </li>
                            <li>
                                <label className="topcoat-radio-button__label">
                                    Forest
                                    <input type="radio" name="topcoat3"/>
                                    <span className="topcoat-radio-button"></span>
                                </label>
                            </li>
                            <li>
                                <label className="topcoat-radio-button__label">
                                    Queen
                                    <input type="radio" name="topcoat3"/>
                                    <span className="topcoat-radio-button"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar;