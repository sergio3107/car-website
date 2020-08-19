import React, { useContext } from "react";
import exhaust1 from "./images/exhaust/exhaust1.jpg";
import exhaust2 from "./images/exhaust/exhaust2.jpg";
import exhaust3 from "./images/exhaust/exhaust3.jpg";
import exhaust4 from "./images/exhaust/exhaust4.jpg";
import exhaust5 from "./images/exhaust/exhaust5.jpg";
import muffler1 from "./images/exhaust/muffler1.jpg";
/*import { cartContext } from "../cart/cartContaxt"; */

function Exhaust(props) {
  /*const [cart, setCart] = useContext(cartContext);*/
  const addToCart = () => {
    const exhaust = { name: props.name, price: props.price };
    /*setCart((current) => [...current, exhaust]);*/
  };

  return (
    <div className="container">
      <div className="grid-3">
        <div className="card">
          <div className="shop-item">
            <span className="shop-item-title">{props.name}</span>
            <img className="shop-item-image" src={exhaust1} alt="img" />
            <span className="shop-item-details">Exhaust Tip</span>
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
            <span className="shop-item-title">TRD Muffler</span>
            <img className="shop-item-image" src={muffler1} alt="img" />
            <span className="shop-item-details">Sports racing Muffler</span>
            <span className="shop-item-price">R1800.00</span>
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
            <span className="shop-item-title">TRD Sports OEM Spec</span>
            <img className="shop-item-image" src={exhaust2} alt="img" />
            <span className="shop-item-details">OEM Sports Muffler</span>
            <span className="shop-item-price">R2000.00</span>
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
              Universal 6cm Inlet & Outlet
            </span>
            <img className="shop-item-image" src={exhaust3} alt="img" />
            <span className="shop-item-details">
              Stainless Exhaust Blue Tip
            </span>
            <span className="shop-item-price">R600.00</span>
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
            <span className="shop-item-title">Akraprovic Carbon Fiber</span>
            <img className="shop-item-image" src={exhaust4} alt="img" />
            <span className="shop-item-details">Carbon Fiber Exhaust Tip</span>
            <span className="shop-item-price">R1800.00</span>
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
            <span className="shop-item-title">Lancer EVO X</span>
            <img className="shop-item-image" src={exhaust5} alt="img" />
            <span className="shop-item-details">
              Dual Catback Muffler Exhaust
            </span>
            <span className="shop-item-price">R26,400.00</span>
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

export default Exhaust;
