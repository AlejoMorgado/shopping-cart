import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.jpg";
import "./Navbar.scss";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const [click, setClick] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="" height={50} width={50} className="hidden-dark" />
        <span className="navbar-title">
          SNKR.
          <span className="navbar-subtitle">global</span>
        </span>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/cart">
            <span className="material-icons-outlined">shopping_cart</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
