import React from "react";

/* CSS */
import "./Best.css";
import "../product/Product.css";

import Slider from "react-slick";

/* React Icons */
import { AiOutlineShoppingCart } from "react-icons/ai";

import { BestData } from "../../data/BestData";

import BestImage from "../../assets/Best.png";

import uuid from "react-uuid";

const Best = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="best">
      <div className="best-left">
        <img src={BestImage} className="best-image" />
      </div>
      <div className="best-right">
        {" "}
        <div className="best-block">
          <Slider {...settings}>
            {BestData.map((item) => (
              <div className="product-item" key={uuid()}>
                <img src={item.img} className="product-image" />
                <div className="product-content">
                  <p className="product-category">{item.category}</p>
                  <h3 className="product-title">{item.name}</h3>
                  <p className="product-rating">⭐⭐⭐⭐⭐ (5.0)</p>
                  <div className="product-bottom">
                    <h3 className="product-price">${item.price}</h3>
                    <p className="product-crossed">
                      <del>${item.crossedprice}</del>
                    </p>
                    <div className="product-button">
                      <AiOutlineShoppingCart className="product-button-icon" />
                      <h4>Add</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Best;
