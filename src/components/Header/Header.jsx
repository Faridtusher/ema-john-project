import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'


const Header = () => {
   return (
      <div className='header'>
         <nav>
            <img src={logo} alt="" />

            <div className='itemsName'>
               <a href="">Order</a>
               <a href="">Order Review</a>
               <a href="">Manage Inventory</a>
               <a href="">Login</a>
            </div>  
         </nav>
      </div>
   );
};

export default Header;