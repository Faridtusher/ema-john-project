import React from 'react';
import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Order = (props) => {
   console.log(props.product)
   return (
      <div>
         <div>
            <h2>Order summary</h2>
            <p>Select Items : ${ }</p>
            <p>Total Shopping charge : ${ }</p>
            <p>Tax : ${ }</p>
            <h3>Grand Total : ${ }</h3>
            <p><button className='delate-btn'>Clear Cart </button></p>
            <p><button className='order-btn'>Review Order
           
               
            </button></p> 
         </div>
      </div>
   );
};

export default Order;