import React, { useState } from "react";

function cart() {
  const totalPrice = ((acc, current) => acc + current.price, 0);
  return (
    <div className="container">
      <div className="card">
        <h2 class="section-header">CART</h2>
        <div class="cart-row">
          <p>
            <span className="item ">ITEMS:{cart.length}</span>
          </p>
          <p>
            <span className="price">TOTAL PRICE:{totalPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default cart;

export const CartContext = React.createContext();
