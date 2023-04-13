import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './RevieeItem.css'

const ReviewItem = ({product, handleRemoveFromCart}) => {
  const {id, img, price, name, quantity} = product;
    return (
          <div className='review-item'>
              <img src={img} alt="" />
          <div  className='review-details'>
            <h4 className='product-title'>{name}</h4>
              <p>price: <span className='orenge-text'>${price}</span> </p>
              <p>order Quantity <span className='orenge-text'>${quantity}</span> </p>
          </div>
          <button onClick={() => handleRemoveFromCart(id)}  className='btn-delete'>
          <FontAwesomeIcon className='delet-icon' icon={faTrashAlt} />
          </button>
          </div>
    );
};

export default ReviewItem;