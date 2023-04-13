import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
      const loaderProducts = await fetch('products.json');
      const products = await loaderProducts.json();

      const storedCart =  getShoppingCart();
      const saveCart = []
      console.log(storedCart)
     for(const id in storedCart){
       const addedProducts = products.find(pd => pd.id === id)
       if(addedProducts){
            const quantity = storedCart[id]
            addedProducts.quantity = quantity;
            saveCart.push(addedProducts)

         }
     }
      return saveCart;
}

export default cartProductsLoader;