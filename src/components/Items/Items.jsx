import React from 'react';
import './Items.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Items = (props) => {
   // console.log(props)
   const {img, name, price, seller, ratings, stock } = props.item;
   const handelAddToCart = props.handelAddToCart;
   
   
   return (
      <div>
         <div className='item-container'>
            
               <img src={img} alt="" />
               <h4>{name}</h4>
               <h5>Price : {price}</h5>
               <p>Manufacture : {seller}</p>
               <p>Stock:{stock}</p>
               <p>Ratings: {ratings} star</p>
            
               <button  onClick={()=> handelAddToCart (props.item)} className='perches-btn'>
                  Add To Cart
               <FontAwesomeIcon className='cart-icon' icon={faCartPlus} />
               
               
               </button>
            
         </div>
         
      </div>
   );
};

export default Items;