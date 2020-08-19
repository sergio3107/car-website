import React from "react";
import { Link } from "react-router-dom";
import mag4 from "../images/mag4.jpg";
import suspension3 from "../images/suspension3.jpg";
import badge1 from "../images/badge1.jpg";
import intake1 from "../images/intake1.jpg";
import engine1 from "../images/engine1.jpg";
import exhaust1 from "../images/exhaust1.jpg";

function shop() {
  return (
    <div className="container">
      <div className="grid-3">
        <div className="card-2">
          <h2>Wheels</h2>
          <img src={mag4} alt="img" />
          <br />
          <button>
            <Link to="/Mags">
              <b>Shop</b>
            </Link>
          </button>
        </div>
        <div className="card-2">
          <h2>Engine</h2>
          <img src={engine1} alt="img" />
          <br />
          <button>
            <Link to="/Engine">
              <b>Shop</b>
            </Link>
          </button>
        </div>
        <div className="card-2">
          <h2>Exterior Mods</h2>
          <img src={badge1} alt="img" />
          <button>
            <Link to="/Mods">
              <b>Shop</b>
            </Link>
          </button>
        </div>
      </div>
      <div className="grid-3">
        <div className="card-2">
          <h2>Suspension</h2>
          <img src={suspension3} alt="img" />
          <button>
            <Link to="/Suspension">
              <b>Shop</b>
            </Link>
          </button>
        </div>
        <div className="card-2">
          <h2>Exhaust</h2>
          <img src={exhaust1} alt="img" />
          <Link to="/Exhaust">
            <b>Shop</b>
          </Link>
        </div>
        <div className="card-2">
          <h2>Performance Air Intake</h2>
          <img src={intake1} alt="img" />
          <button>
            <Link to="/Intake">
              <b>Shop</b>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default shop;
