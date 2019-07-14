import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CartCount = styled.p`
  width: 47px;
  height: 27px;
  font-family: Arial;
  font-size: 22px;
  color: #222222;
  font-weight: 400;
  text-decoration: none solid rgb(34, 34, 34);
  margin: 0 !important;
`;


const CardHeaderComponent = () => {

  return (
    <CartContainer data-test="Cart" className="my-2 my-sm-0">
      <FontAwesomeIcon icon={faShoppingCart} style={{height:'1.5em',width:'1.5em',marginRight:'7px'}} />
      <CartCount>(11)</CartCount>
    </CartContainer>
  );

}

export default CardHeaderComponent;
