import React from 'react';
import './RevieeItem.css'

const ReviewItem = ({product}) => {
  const {id, img, price, name, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
         <div  className='review-details'>
           <h4 className='product-title'>{name}</h4>
            <p>price: <span className='orenge-text'>${price}</span> </p>
            <p>order Quantity <span className='orenge-text'>${quantity}</span> </p>

         </div>
        </div>
    );
};

export default ReviewItem;