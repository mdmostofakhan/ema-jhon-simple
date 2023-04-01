import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

        
    const handleAddToCort = (product) =>{
    //  cart.push(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className="shop-container">
          <div className="products-container"> 
              {
                products.map(product => <Product
                 key={product.id}
                 product = {product}
                 handleAddToCort = {handleAddToCort }

                ></Product>)
              }
         </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Select items:{cart.length}</p>
           </div>
     </div>
    );
};

export default Shop;