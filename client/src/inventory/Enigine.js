import React, { useState } from "react";
import engineoil from "./images/engine/engineoil.jpg";
import supercharger1 from "./images/engine/supercharger1.jpg";
import supercharger3 from "./images/engine/supercharger3.jpg";
import blowvalve from "./images/engine/blowvalve.jpg";
import turbo from "./images/engine/turbo.jpg";
import turbo1 from "./images/engine/turbo1.jpg";

function Enigine(props) {
  /*const [cart, setCart] = useContext(cartContext); */
  const addToCart = () => {
    const exhaust = { name: props.name, price: props.price };
    /* setCart((current) => [...current, exhaust]); */
  };

  return (
    <div className="container">
      <div className="grid-3">
        <div className="card">
          <div className="shop-item">
            <span className="shop-item-title">{props.name}</span>
            <img className="shop-item-image" src={engineoil} alt="img" />
            <span className="shop-item-details">Super Sports Engine Oil</span>
            <span className="shop-item-price">{props.price}</span>
            <button
              className="btn btn-primary shop-item-button"
              type="button"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="card">
          <div className="shop-item">
            <span className="shop-item-title">{props.name}</span>
            <img className="shop-item-image" src={supercharger1} alt="img" />
            <span className="shop-item-details">Supercharger full kit</span>
            <span className="shop-item-price">R1,949.99</span>
            <button
              className="btn btn-primary shop-item-button"
              type="button"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="card">
          <div className="shop-item">
            <span className="shop-item-title">{props.name}</span>
            <img className="shop-item-image" src={supercharger3} alt="img" />
            <span className="shop-item-details">
              First gen TRD Supercharger kit
            </span>
            <span className="shop-item-price">R2,500.00</span>
            <button
              className="btn btn-primary shop-item-button"
              type="button"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="grid-3">
        <div className="card">
          <div className="shop-item">
            <span className="shop-item-title">{props.name}</span>
            <img className="shop-item-image" src={blowvalve} alt="img" />
            <span className="shop-item-details">
              Blow Off Valve kit 93-02 Supra
            </span>
            <span className="shop-item-price">R3000.00</span>
            <button
              className="btn btn-primary shop-item-button"
              type="button"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="card">
          <div className="shop-item">
            <span className="shop-item-title">{props.name}</span>
            <img className="shop-item-image" src={turbo1} alt="img" />
            <span className="shop-item-details">Integra LS turbo kit</span>
            <span className="shop-item-price">R2,999.99</span>
            <button
              className="btn btn-primary shop-item-button"
              type="button"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="card">
          <div className="shop-item">
            <span className="shop-item-title">{props.name}</span>
            <img className="shop-item-image" src={turbo} alt="img" />
            <span className="shop-item-details">
              Turbo,Intercooler,Wastegate,Blow off valve and Boost Gauge
            </span>
            <span className="shop-item-price">R10,000.00</span>
            <button
              className="btn btn-primary shop-item-button"
              type="button"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enigine;
