import React from 'react';
import './Order.css';


const Order = ({ product }) => {
   
   console.log(product)
   let totalPrice  = 0;
   let totalShipping = 0;
   for(const productPrice of product){
      totalPrice = totalPrice + productPrice.price;
      totalShipping = totalShipping + productPrice.shipping;
   }

   const tax = (totalPrice * 2) / 100;
   const grandTotal = totalPrice +  tax + totalShipping;
   return (
      <div className='product-info'>
         <p>Select Items : ${product.length}</p>
         <p>Product Price : ${totalPrice}</p>
         <p>Total Shopping charge : ${totalShipping.toFixed(2)}</p>
         <p>Tax : ${tax.toFixed(2)}</p>
         <h3>Grand Total : ${grandTotal.toFixed(2)}</h3>
         <p><button className='delate-btn'>Clear Cart </button></p>
         <p><button className='order-btn'>Review Order </button></p>
      </div>
   );
};

export default Order;