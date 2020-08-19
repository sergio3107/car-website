import React, { useContext } from "react";
import lugnuts1 from "./images/mods/lugnuts1.jpg";
import fuelcap from "./images/mods/fuelcap.jpg";
import badge3 from "./images/mods/badge3.jpg";
import badge2 from "./images/mods/badge2.jpg";
import start1 from "./images/mods/start1.jpg";
import seat1 from "./images/mods/seat1.jpg";
import shift2 from "./images/mods/shift2.jpg";
import shift1 from "./images/mods/shift1.jpg";
import pedal1 from "./images/mods/pedal1.jpg";
/*import { cartContext } from "../cart/cartContaxt"; */

function Mods(props) {
  /* const [cart, setCart] = useContext(cartContext);*/
  const addToCart = () => {
    const mods = { name: props.name, price: props.price };
    /*setCart((current) => [...current, mods]); */
  };

  return (
    <div className="container">
      <div className="grid-3">
        <div className="card">
          <div className="shop-item">
            <span className="shop-item-title">
              TRD Tire Air Caps{props.name}
            </span>
            <img className="shop-item-image" src={lugnuts1} alt="img" />
            <span className="shop-item-details">
              1 Set of 4,Black with TRD logo
            </span>
            <span className="shop-item-price">R150.00</span>
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
            <span className="shop-item-title">TRD Fuel Cap {props.name}</span>
            <img className="shop-item-image" src={fuelcap} alt="img" />
            <span className="shop-item-details">
              Hard plastic cap to make sure of no fuel spill
            </span>
            <span className="shop-item-price">R250</span>
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
              TRD Sport Badge {props.name}
            </span>
            <img className="shop-item-image" src={badge3} alt="img" />
            <span className="shop-item-details">Made out of ABS plastic</span>
            <span className="shop-item-price">R120 each</span>
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
              TRD push to start button {props.name}
            </span>
            <img className="shop-item-image" src={start1} alt="img" />
            <span className="shop-item-details">sold individually</span>
            <span className="shop-item-price">R300.00</span>
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
            <span className="shop-item-title">TRD PRO Badge {props.name}</span>
            <img className="shop-item-image" src={badge2} alt="img" />
            <span className="shop-item-details">Made of ABS plastic</span>
            <span className="shop-item-price">R240</span>
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
              TRD Seat cover set {props.name}
            </span>
            <img className="shop-item-image" src={seat1} alt="img" />
            <span className="shop-item-details">
              Waterproof red TRD seat covers
            </span>
            <span className="shop-item-price">R1500</span>
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
            <span className="shop-item-title">TRD Shifter {props.name}</span>
            <img className="shop-item-image" src={shift1} alt="img" />
            <span className="shop-item-details">ABS speed shifter</span>
            <span className="shop-item-price">R80.00</span>
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
              TRD Racing shifter {props.name}{" "}
            </span>
            <img className="shop-item-image" src={shift2} alt="img" />
            <span className="shop-item-details">ABS plastic knob</span>
            <span className="shop-item-price">R80</span>
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
              TRD Racing pedals {props.name}
            </span>
            <img className="shop-item-image" src={pedal1} alt="img" />
            <span className="shop-item-details">
              Manual Aluminium pedals and foot rest included in set{" "}
            </span>
            <span className="shop-item-price">R800</span>
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

export default Mods;
