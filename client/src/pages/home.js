import React from "react";
import parts2 from "../images/parts2.jpg";
import stickers1 from "../images/stickers1.jpg";
import { Link } from "react-router-dom";

const home = (props) => {
  return (
    <div className="grid-1">
      <div>
        <h1>
          <b>Specialize in TRD racing parts</b>
        </h1>
      </div>
      <div className="card-1">
        <ul>
          <p>
            <b>Login if you already have a member.click below!</b>
          </p>
          <li>
            <button>
              <Link to="/Login">Login here</Link>
            </button>
          </li>
          <br />
          <p>
            <b>Register to become a member Octane family by clicking below!</b>
          </p>
          <li>
            <button>
              <Link to="/Register">Register here</Link>
            </button>
          </li>
        </ul>
      </div>
      <br />
      <div className="grid-2">
        <img src={parts2} alt="img" />
        <img src={stickers1} alt="img" />
      </div>
      <br />
      <br />
      <footer>
        <h3>Created by: Sergio Pillay</h3>
      </footer>
    </div>
  );
};

export default home;
