import React, { useContext, useState } from "react";

/* Import CSS File */
import "./Product.css";

/* React Icons */
import { AiOutlineShoppingCart } from "react-icons/ai";

import uuid from "react-uuid";
import { CartContext } from "../../context/CartContext";

const Product = ({ data }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleCart = (id) => {
    setCart((cart) => [...cart, { name: "Pussy" }]);
    console.log(id);
  };
  return (
    <>
      <div className="product">
        {data.map((item) => {
          return (
            <div className="product-item" key={uuid()}>
              {item.deal && (
                <div className="deals">
                  <p>Deals</p>
                </div>
              )}

              <img src={item.img} className="product-image" />
              <div className="product-content">
                <p className="product-category">{item.category}</p>
                <h3 className="product-title">{item.name}</h3>
                <p className="product-rating">⭐⭐⭐⭐⭐ (5.0)</p>
                {/* Bottom */}
                <div className="product-bottom">
                  <h3 className="product-price">${item.price}</h3>
                  <p className="product-crossed">
                    <del>${item.crossedprice}</del>
                  </p>
                  <button
                    className="product-button"
                    style={{ border: "none" }}
                    onClick={() => handleCart}
                  >
                    <AiOutlineShoppingCart className="product-button-icon" />
                    <h4>Add</h4>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
