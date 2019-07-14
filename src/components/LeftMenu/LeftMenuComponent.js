import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setDataByCategory} from '../../store/actions';
import styled from 'styled-components';

const SectionContainer = styled.div`
  padding: 89px 10px 100px 45px;
`;

const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 77%;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none solid rgb(255, 255, 255);
    font-family: Arial;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

const AccordionFilterContainer = styled(AccordionContainer)`
    margin-top: 30px;
`;

const CardHeader = styled.div` 
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffffff !important;
`;

const CardTitleHeader = styled(CardHeader)`
    background-color: #428bca !important;
    color: #ffffff;
    font-weight: 400;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
`;

const CardLink = styled.a` 
    color: #555555;

    :hover {
        cursor: default;
        color: #555555;
    }
`;

const ImageIcon = styled.img` 
    position: absolute;
    right: 18px;
    top: 12px;

    :hover {
        cursor: pointer;
    }
`;

const BadgeContainer = styled.span`
    background-color: #6f6f6f;
    padding: 0.25em 0.4em;
    font-size: 80%;
    border-radius: 0.65rem;
`;

const CheckBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CheckBoxText = styled.span`
    margin-left: 5px;
`;



const LeftMenuComponent = () => {
    const shoppingData  = useSelector(state => state.data.shoppingData);
    const dispatch = useDispatch();
  
//   console.log(shoppingData);
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
        <SectionContainer>
            <AccordionContainer className="accordion" id="accordion">
                    <CardTitleHeader className="card-header">
                        <CardLink className="card-link" href="#">
                            Filters
                        </CardLink>
                    </CardTitleHeader>
                <div className="card">
                    <CardHeader className="card-header">
                        <CardLink className="card-link" href="#" >
                            Category
                        </CardLink>
                        <ImageIcon data-toggle="collapse" href="#collapseOne" src="images/PixleIcon.svg" alt="CategoryIcon" />
                    </CardHeader>
                    <div id="collapseOne" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            {products.map(prod => {
                                return (
                                    <CheckBoxContainer key={prod._id}>
                                        <input type="checkbox" value={prod.category} name="Category" onChange={handleChange}/>
                                        <CheckBoxText>{prod.category}</CheckBoxText>
                                        <br />
                                    </CheckBoxContainer>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <CardHeader className="card-header">
                        <CardLink className="card-link" href="#">
                            Price
                        </CardLink>
                        <ImageIcon data-toggle="collapse" href="#collapseTwo" src="images/PixleIcon.svg" alt="CategoryIcon" />
                    </CardHeader>
                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            {prices.map(price => {
                                return (
                                    <CheckBoxContainer key={price.id}>
                                        <input type="checkbox" name={price.id} />
                                        <CheckBoxText>{price.price}</CheckBoxText>
                                        <br />
                                    </CheckBoxContainer>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <CardHeader className="card-header">
                        <CardLink className="card-link" href="#">
                            Rating
                        </CardLink>
                        <ImageIcon data-toggle="collapse" href="#collapseThree" src="images/PixleIcon.svg" alt="CategoryIcon" />
                    </CardHeader>
                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            {ratings.map(rate => {
                                return (
                                    <CheckBoxContainer key={rate.id}>
                                        <input type="checkbox" name={rate.rating} />
                                        <CheckBoxText>{rate.rating}</CheckBoxText>
                                        <br />
                                    </CheckBoxContainer>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <CardHeader className="card-header">
                        <CardLink className="card-link" href="#">
                            Discounts/Offers
                        </CardLink>
                        <ImageIcon data-toggle="collapse" href="#collapseFour" src="images/PixleIcon.svg" alt="CategoryIcon" />
                    </CardHeader>
                    <div id="collapseFour" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            {<div>
                                <input type="checkbox"/>
                                <CheckBoxText>Yes</CheckBoxText>
                                <br/>
                                <input type="checkbox"/>
                                <CheckBoxText>No</CheckBoxText>
                            </div>}
                        </div>
                    </div>
                </div>
            </AccordionContainer>

            <AccordionFilterContainer className="accordion" id="accordion">
                <div className="card">
                    <CardHeader className="card-header">
                        <CardLink className="card-link" href="#">
                           Cras justo odio
                        </CardLink>
                        <BadgeContainer className="badge-dark">9</BadgeContainer>
                    </CardHeader>
                </div>
                <div className="card">
                    <CardHeader className="card-header">
                        <CardLink className="card-link" href="#">
                           Dapibus ac facilisis in
                        </CardLink>
                        <BadgeContainer className="badge-dark">9</BadgeContainer>
                    </CardHeader>
                </div>
                <div className="card">
                    <CardHeader className="card-header">
                        <CardLink className="card-link" href="#">
                           Morbi leo risus
                        </CardLink>
                        <BadgeContainer className="badge-dark">9</BadgeContainer>
                    </CardHeader>
                </div>
            </AccordionFilterContainer>
        </SectionContainer>




    );
}

export default LeftMenuComponent;