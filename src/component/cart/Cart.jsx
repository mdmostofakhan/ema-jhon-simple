import React from 'react';
import './Cart.css'


const Cart = ({cart}) => {
    // const cart =props.cart;  //option 1
        // const {cart} = props; // option 2
  
  console.log(cart)

  let total = 0;
  let totalShipping = 0;
  for(const products of cart){
    total = total + products.price
    totalShipping = totalShipping + products.shipping
  }

  const tax = total*7/100;
  const grandTotal = total + totalShipping + tax;

        return (
        <div className='cart'>
              <h4>Order Summary</h4>
              <p>Select items:{cart.length}</p>
              <p>Total Price: {total}</p>
              <p>Total Shipping Change: {totalShipping.toFixed(2)} </p>
              <p>Tax: {tax.toFixed(2)}</p>
              <h6>GrandTotal: {grandTotal}</h6>
        </div>
    );
};

export default Cart;