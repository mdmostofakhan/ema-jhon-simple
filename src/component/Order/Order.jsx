import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const saveCart = useLoaderData()
    const [cart, setCart] = useState(saveCart);
 

    const handleRemoveFromCart = (id) =>{
        const remening = cart.filter(product => product.id !== id);
        setCart(remening)
        removeFromDb(id)
    }

    const handleClearCart = (id) =>{
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
           <div className='review-container'>
               {
                cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveFromCart ={handleRemoveFromCart}
                    ></ReviewItem>)
               }
           </div>
           <div className='cart-container'>
            <Cart 
            
            cart={cart}
            handleClearCart ={handleClearCart }
            >
               <Link to="/checkout"></Link>
               <button className='btn-proces'>Proceed checkout</button>
            </Cart>
           </div>
        </div>
    );
};

export default Order;