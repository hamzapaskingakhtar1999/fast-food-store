import React, { useState } from "react";

/* CSS Files */
import "./Navbar.css";

/* React Icons */
import { BsCart3, BsSearch } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { RiCustomerService2Line } from "react-icons/ri";

/* React Router DOM */
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };
  console.log(active);

  return (
    <div className="navbar">
      <div className="first-header">
        <div className="navbar-left">
          <div
            className={`responsive-bar ${active ? "open" : ""}`}
            onClick={handleActive}
          >
            {active ? (
              <AiOutlineClose className="responsive-icon" />
            ) : (
              <AiOutlineMenu className="responsive-icon" />
            )}
          </div>

          <Link style={{ textDecoration: "none" }} to="/">
            <h1 className="first-header-logo">Seiwa Fastfood</h1>
          </Link>
        </div>
        <div className="navbar-right">
          <div className="first-header-wishlist">
            <AiOutlineHeart className="first-header-icon" />
            <p>Compare</p>
          </div>
          <div className="first-header-account">
            <MdOutlineAccountCircle className="first-header-icon" />
            <p>Account</p>
          </div>
          <Link to="/cart">
            <div className="first-header-cart">
              <BsCart3 className="first-header-icon" />
              <p>Cart</p>
              <p className="cart-items-number">5</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Second Header */}

      <div className="second-header">
        <ul className={`nav-items ${active ? "open" : ""}`}>
          <Link className="Link" to="/">
            <li className="nav-item">
              <AiOutlineHome className="second-header-icon" />
              Home
            </li>
          </Link>
          <Link className="Link" to="/about">
            <li className="nav-item">
              <AiOutlineInfoCircle className="second-header-icon" />
              About
            </li>
          </Link>
          <Link className="Link" to="/menu">
            <li className="nav-item">
              <BiCategory className="second-header-icon" />
              Menu
            </li>
          </Link>
          <Link className="Link" to="/contact">
            <li className="nav-item">
              <FiPhoneCall className="second-header-icon" />
              Contact Us
            </li>
          </Link>

          <li className="nav-item hide">
            <RiCustomerService2Line className="second-header-icon bigger-icon" />
            <div className="customer-support">
              <h4 style={{ color: "green" }}>+1 123 456 789</h4>
              <p>24/7 Customer Support</p>
            </div>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Navbar;

/* 
2 Headers

-> Logo     Search          Cart
-> Home     About           Categories      Contact

*/
