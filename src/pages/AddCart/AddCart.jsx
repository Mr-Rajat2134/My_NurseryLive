// Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  return (


<> 
dfsdfdsfdsfsdfdsf

  <div        >
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.Name}</li>
        ))}
      </ul>
    </div>


    </>


 
  );
};

export default Cart;
