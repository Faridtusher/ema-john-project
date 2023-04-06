import React, { useEffect, useState } from 'react';
import './Shop.css'
import Items from '../Items/Items';
import Order from '../Order/Order';

const Shop = () => {

   const [items, setItems] = useState([])

   const [product, setProduct] = useState([]);

   useEffect( ()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setItems(data))
   } ,[]);

  
   const handelAddToCart = (item) =>{
      // console.log(item)
      const newCart = [...product, item];
      setProduct(newCart);
   }
  

   return (
      <div>
         <div className='shop-container'>
            <div className='shop-items'>
               {
                  items.map(item => <Items 
                     key={item.id} 
                     item={item}
                     handelAddToCart ={handelAddToCart} 
                      
                      ></Items>)
               }
            </div>

            <div>
              <Order 
              product ={product}
              ></Order>
             
            </div>
         </div> 
      </div>
   );
};

export default Shop;