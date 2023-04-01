import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';
import Cart from '../cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect( () =>{
        const storedCart = getShoppingCart()
        const saveCart = []
        // step: 1 get  id of the addedProduct
        for(const id in storedCart){
        // step: 2 get product from products state by using id
            const addedProduc = products.find(product => product.id === id)
            if(addedProduc){
        // step 3: add quantity
                const quantity = storedCart[id]
                addedProduc.quantity = quantity
            // step 4: add the added product to the saved cart        
                saveCart.push(addedProduc);
            }
             
            // console.log('added to pep',addedProduc)
        }
        setCart(saveCart);
    },[])
        
    const handleAddToCort = (product) =>{
    //  cart.push(product)
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id);
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
              <Cart cart={cart}></Cart>
           </div>
     </div>
    );
};

export default Shop;

// useEffect( () =>{
    //     const storedCart = getShoppingCart();
    //     // step 1: get id
    //     for(const id in storedCart){
    //         // step 2 get the product by using id
    //         const addedProduc = products.find(product => product.id === id);
         
    //         // step: 3 get quantity of the product
    //         const quantity = storedCart[id];
    //         addedProduc.quantity = quantity;
            
    //         console.log(addedProduc)
    //     }
         
    // },[products])