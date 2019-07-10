import React, { useState } from 'react';
import './LeftMenuComponent.css';
import {useSelector, useDispatch} from 'react-redux';
import {setDataByCategory} from '../../store/actions';
// import sourceData from '../../data/products_data';


const LeftMenuComponent = () => {
    const shoppingData  = useSelector(state => state.data.shoppingData);
    const dispatch = useDispatch();
  
  console.log(shoppingData);
    let categoryData = shoppingData.filter((res,index,self) => { return res.category !== null && self.findIndex(t => t.category == res.category) === index});
    let rating = [{ id: 1, rating: 1 }, { id: 2, rating: 2 }, { id: 3, rating: 3 }, { id: 4, rating: 4 }, { id: 5, rating: 5 }];
    let price = [{ id: 1, price: "0-100" }, { id: 2, price: "100-200" }, { id: 3, price: "200-300" }, { id: 4, price: "300-400" }, { id: 5, price: "400+" }];
    
    const [products, setProducts] = useState(categoryData);
    const [ratings, setRatings] = useState(rating);
    const [prices, setPrices] = useState(price);

    const handleChange = (e) => {
        if(e.target.name === 'Category') {
         let shoppingList = shoppingData.filter(item => item.category == e.target.value);
             dispatch(setDataByCategory(shoppingList));
        }
    }


    return (
        <div className="cards">
            <div className="accordion" id="accordion">
                <div className="filterTitle">
                    <div className="card-header">
                        <a className="card-link" href="#">
                            Filters
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a className="card-link" href="#" >
                            Category
                        </a>
                        <img className="pixel-icon" data-toggle="collapse" href="#collapseOne" src="images/PixleIcon.svg" alt="CategoryIcon" />
                    </div>
                    <div id="collapseOne" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            {products.map(prod => {
                                return (
                                    <div key={prod._id} className="filterSection">
                                        <input type="checkbox" className="checkBoxInput" value={prod.category} name="Category" onChange={handleChange}/>
                                        <span className="filterText">{prod.category}</span>
                                        <br />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a className="card-link" href="#">
                            Price
                        </a>
                        <img className="pixel-icon" data-toggle="collapse" href="#collapseTwo" src="images/PixleIcon.svg" alt="CategoryIcon" />
                    </div>
                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            {prices.map(price => {
                                return (
                                    <div key={price.id} className="filterSection">
                                        <input type="checkbox" className="checkBoxInput" name={price.id} />
                                        <span className="filterText">{price.price}</span>
                                        <br />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a className="card-link" href="#">
                            Rating
                        </a>
                        <img className="pixel-icon" data-toggle="collapse" href="#collapseThree" src="images/PixleIcon.svg" alt="CategoryIcon" />
                    </div>
                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            {ratings.map(rate => {
                                return (
                                    <div key={rate.id} className="filterSection">
                                        <input type="checkbox" className="checkBoxInput" name={rate.rating} />
                                        <span className="filterText">{rate.rating}</span>
                                        <br />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a className="card-link" href="#">
                            Discounts/Offers
                        </a>
                        <img className="pixel-icon" data-toggle="collapse" href="#collapseFour" src="images/PixleIcon.svg" alt="CategoryIcon" />
                    </div>
                    <div id="collapseFour" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            {<div>
                                <input type="checkbox" className="checkBoxInput"/>
                                <span className="filterText">Yes</span>
                                <br/>
                                <input type="checkbox" className="checkBoxInput"/>
                                <span className="filterText">No</span>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion filterExpanded" id="accordion">
                <div className="card">
                    <div className="card-header">
                        <a className="card-link" href="#">
                           Cras justo odio
                        </a>
                        <span className="badge badge-dark">9</span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a className="card-link" href="#">
                           Dapibus ac facilisis in
                        </a>
                        <span className="badge badge-dark">9</span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a className="card-link" href="#">
                           Morbi leo risus
                        </a>
                        <span className="badge badge-dark">9</span>
                    </div>
                </div>
            </div>
        </div>




    );
}

export default LeftMenuComponent;