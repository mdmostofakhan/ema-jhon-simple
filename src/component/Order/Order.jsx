import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
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
            <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Order;