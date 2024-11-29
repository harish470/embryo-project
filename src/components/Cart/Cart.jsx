import React from 'react'
import './Cart.css';
function Cart({title,decription}) {
  return (
    <>
        
    <div className="div-cart">
        <i className="fa-solid fa-cart-plus"></i>
        <h1>{title}</h1>
        
        <h3>{decription}</h3>
    </div>
    
   
   
</>
  )
}

export default Cart