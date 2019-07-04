import React from 'react';
import './CardHeaderComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const CardHeaderComponent = () => {

  return (
    <div className="my-2 my-sm-0 cartSection">
    <FontAwesomeIcon icon={ faShoppingCart } className="iconContainer"/>
    <p className="cardCount">(11)</p>
</div>
  );

}

export default CardHeaderComponent;
