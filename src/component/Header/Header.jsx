
import React from 'react';
import './Header.css'
import logo from './../../images/Logo.svg'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='header'>
          <img src={logo} alt=""/>
           <nav>
              <Link to="/">shop</Link>
              <Link to="/orders">order</Link>
              <Link to="/invetory">invetory</Link>
              <Link to="/login">login</Link>
           </nav>
        </div>
    );
};

export default Header;