import React from "react";

import "./Hero.css";

import { Link, useNavigate } from "react-router-dom";

/* Data */

const Hero = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-left">
          <h1 className="hero-left-title-h1">{data.title1}</h1>
          <h2 className="hero-left-title-h2" style={{ marginTop: "-20px" }}>
            {data.title2}
          </h2>
          <h2 className="hero-left-subtitle-h2 ">{data.subtitle}</h2>
          <div className="hero-buttons">
            <button className="view-menu-btn" onClick={() => navigate("/menu")}>
              View Menu
            </button>
            <button
              className="view-deals-btn"
              style={{ scrollBehavior: "smooth" }}
            >
              <a href="#deals">View Deals</a>
            </button>
          </div>
        </div>
        {/* RIGHT */}
        <div className="hero-right">
          {<img src={data.img} className="hero-image" />}
        </div>
      </div>
    </div>
  );
};

export default Hero;
