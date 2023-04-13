import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';
import Cart from '../cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';


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
    },[products])
        
    const handleAddToCort = (product) =>{
    //  cart.push(product)
         let newCart = []
        // const newCart = [...cart, product]
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining.exists];
        }


        setCart(newCart)
        addToDb(product.id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
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
              <Cart 
              cart={cart}
              handleClearCart={handleClearCart}
              >
              <Link to ="/orders">
                   <button className='btn-proceed'>Review Order</button>
              </Link>
              </Cart>
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