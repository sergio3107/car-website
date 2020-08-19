import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Octane car-parts",
};

Navbar.propTypes = {
  title: propTypes.string.isRequired,
};

export default Navbar;
