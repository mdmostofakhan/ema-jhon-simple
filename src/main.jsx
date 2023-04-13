import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/shop/Shop';
import Home from './component/Layout/Home';
import Order from './component/Order/Order';
import Invetory from './component/Invetory/Invetory';
import Login from './component/Login/Login';
import cartProductsLoader from './LoderProducts/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Order></Order>,
        loader: cartProductsLoader 
      },
      {
        path:'invetory',
        element: <Invetory></Invetory>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
