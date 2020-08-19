import React, { useContext } from "react";
import mag2 from "./images/mags/mag2.jpg";
import mag3 from "./images/mags/mag3.jpg";
import mag4 from "./images/mags/mag4.jpg";
import mag5 from "./images/mags/mag5.jpg";
import mag6 from "./images/mags/mag6.jpg";
import mag7 from "./images/mags/mag7.jpg";
import mag8 from "./images/mags/mag8.jpg";
import mag9 from "./images/mags/mag9.jpg";
import mag10 from "./images/mags/mag10.jpg";
/*import { cartContext } from "../cart/cartContaxt"; */

function Mags(props) {
  /* const [cart, setCart] = useContext(cartContext); */
  const addToCart = () => {
    const mags = { name: props.name, price: props.price };
    /* setCart((current) => [...current, exhaust]); */
  };

  return (
    <div className="container">
      <div className="grid-3">
        <div className="card">
          <div className="shop-item">
            <span className="shop-item-title">
              TRD Black Split 5 spoke {props.name}
            </span>
            <img className="shop-item-image" src={mag3} alt="img" />
            <span className="shop-item-details">18" Alloy Rims</span>
            <span className="shop-item-price">R12,000.00</span>
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
            <span className="shop-item-title">
              FR-S TRD Gunmetal grey {props.name}
            </span>
            <img className="shop-item-image" src={mag4} alt="img" />
            <span className="shop-item-details">17" Forged Aluminium Rims</span>
            <span className="shop-item-price">R10,249.99</span>
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
            <span className="shop-item-title">
              TC TRD Black 5 spoke {props.name}
            </span>
            <img className="shop-item-image" src={mag5} alt="img" />
            <span className="shop-item-details">18" Black Rims</span>
            <span className="shop-item-price">R5,500.00</span>
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
            <span className="shop-item-title">
              Toyota TRD Silver Split 7 spoke {props.name}
            </span>
            <img className="shop-item-image" src={mag6} alt="img" />
            <span className="shop-item-details">
              19" Alloy Genuine OEM Rims
            </span>
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
            <span className="shop-item-title">
              NEO TOSCO TRD Vintage Style {props.name}
            </span>
            <img className="shop-item-image" src={mag7} alt="img" />
            <span className="shop-item-details">15" silver Rims</span>
            <span className="shop-item-price">R4,800.00</span>
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
            <span className="shop-item-title">
              TRD TF X-Limited {props.name}
            </span>
            <img className="shop-item-image" src={mag10} alt="img" />
            <span className="shop-item-details">18" Black Mica x Polish</span>
            <span className="shop-item-price">R16,500.00</span>
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
            <span className="shop-item-title">TRD TF9 {props.name}</span>
            <img className="shop-item-image" src={mag9} alt="img" />
            <span className="shop-item-details">18" Rimbrush Matte Black</span>
            <span className="shop-item-price">R15,400.00</span>
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
            <span className="shop-item-title">TRD TF4A {props.name}</span>
            <img className="shop-item-image" src={mag8} alt="img" />
            <span className="shop-item-details">18" Diamond Cut Sliver</span>
            <span className="shop-item-price">R22,000.00</span>
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
            <span className="shop-item-title">TRD TF5 {props.name}</span>
            <img className="shop-item-image" src={mag2} alt="img" />
            <span className="shop-item-details">18" High Gloss Silver II</span>
            <span className="shop-item-price">R19,000.00</span>
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

export default Mags;
