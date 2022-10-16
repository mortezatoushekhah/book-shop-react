import React from "react";
import { Link } from "react-router-dom";
import FilterBook from "../FilterBook/FilterBook";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <header className="container">
        <div className="logo">
          <Link to="/">
            <h2>Book Shop</h2>
          </Link>
        </div>

        <div className="nav-link">
          <Link to="/account">Account</Link>
          <Link to="/checkout">Checkout</Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
