import React, { useContext } from "react";
import intake1 from "./images/intake/intake1.jpg";
import intake2 from "./images/intake/intake2.jpg";
import intake3 from "./images/intake/intake3.jpg";
import intake4 from "./images/intake/intake4.jpg";
import intake5 from "./images/intake/intake5.jpg";
import intake6 from "./images/intake/intake6.jpg";
/*import { cartContext } from "../cart/cartContaxt";*/

function Intake(props) {
  /*const [cart, setCart] = useContext(cartContext);*/
  const addToCart = () => {
    const intake = { name: props.name, price: props.price };
    /* setCart((current) => [...current, intake]); */
  };

  return (
    <div className="container">
      <div className="grid-3">
        <div className="card">
          <div className="shop-item">
            <span className="shop-item-title">
              BBK Performanace {props.name}
            </span>
            <img className="shop-item-image" src={intake1} alt="img" />
            <span className="shop-item-details">Cold Air Intake System</span>
            <span className="shop-item-price">R2,000.00</span>
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
              Spectre Performance {props.name}
            </span>
            <img className="shop-item-image" src={intake2} alt="img" />
            <span className="shop-item-details">
              9063 Aluminium polished cold air intake system with HPR Red filter
            </span>
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
            <span className="shop-item-title">K&N</span>
            <img className="shop-item-image" src={intake4} alt="img" />
            <span className="shop-item-details">
              69 Series Typhoon Aluminium cold air intake {props.name}
            </span>
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
            <span className="shop-item-title">aFe {props.name}</span>
            <img className="shop-item-image" src={intake5} alt="img" />
            <span className="shop-item-details">
              Magnum flow Pro 10R oval straight air filter
            </span>
            <span className="shop-item-price">R1,000.00</span>
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
              Spectre Performanace {props.name}
            </span>
            <img className="shop-item-image" src={intake3} alt="img" />
            <span className="shop-item-details">
              Dual Speed Density Air intake kit
            </span>
            <span className="shop-item-price">R8,400.00</span>
            <button
              className="btn btn-primary shop-item-button"
              type="button"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
        <img src={intake6} alt="img" />
      </div>
    </div>
  );
}

export default Intake;
