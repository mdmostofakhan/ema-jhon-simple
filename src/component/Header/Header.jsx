
import React from 'react';
import './Header.css'
import logo from './../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header'>
          <img src={logo} alt="" />
           <nav>
              <a herf="/shop">shop</a>
              <a herf="/order">order</a>
              <a herf="/invetory">invetory</a>
              <a herf="/login">login</a>
           </nav>
        </div>
    );
};

export default Header;