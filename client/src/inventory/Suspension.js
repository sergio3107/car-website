import React, { useContext } from "react";
import sus1 from "./images/suspen/sus1.jpg";
import sus2 from "./images/suspen/sus2.jpg";
import sus3 from "./images/suspen/sus3.jpg";
import sus4 from "./images/suspen/sus4.jpg";
import sus5 from "./images/suspen/sus5.jpg";
import suspension2 from "./images/suspen/suspension2.jpg";
/*import { cartContext } from "../cart/cartContaxt";*/

function Suspension(props) {
  /* const [cart, setCart] = useContext(cartContext); */
  const addToCart = () => {
    const suspension = { name: props.name, price: props.price };
    /*setCart((current) => [...current, exhaust]); */
  };

  return (
    <div className="container">
      <div className="grid-3">
        <div className="card">
          <div className="shop-item">
            <span className="shop-item-title">
              Performance Air kit {props.name}
            </span>
            <img className="shop-item-image" src={sus1} alt="img" />
            <span className="shop-item-details">Air Suspension Kit</span>
            <span className="shop-item-price">R50,000.00</span>
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
              AIRMEXT Suspension {props.name}
            </span>
            <img className="shop-item-image" src={sus3} alt="img" />
            <span className="shop-item-details">Air Suspension Kit</span>
            <span className="shop-item-price">R35,000.00</span>
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
              Subaru WSX/STI Kit {props.name}
            </span>
            <img className="shop-item-image" src={sus2} alt="img" />
            <span className="shop-item-details">Air Suspension Kit</span>
            <span className="shop-item-price">R45,000.00</span>
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
              PAC Performance {props.name}
            </span>
            <img className="shop-item-image" src={sus4} alt="img" />
            <span className="shop-item-details">
              Racing Coilover Suspension Kit
            </span>
            <span className="shop-item-price">R25,000.00</span>
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
              Belltech Lowering Kit {props.name}
            </span>
            <img className="shop-item-image" src={sus5} alt="img" />
            <span className="shop-item-details">Street Performance shocks</span>
            <span className="shop-item-price">R35,000.00</span>
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
            <span className="shop-item-title">Coils {props.name}</span>
            <img className="shop-item-image" src={suspension2} alt="img" />
            <span className="shop-item-details">Red Coils</span>
            <span className="shop-item-price">R3,000.00</span>
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

export default Suspension;
