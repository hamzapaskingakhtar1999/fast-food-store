import React from "react";

import Delivery from "../../assets/Delivery.svg";
import Open from "../../assets/Open.svg";
import Price from "../../assets/Price.svg";
import Variety from "../../assets/Variety.svg";

import "./Features.css";

import uuid from "react-uuid";

const Features = () => {
  const data = [
    {
      img: Price,
      title: "Best prices & offers",
      subtitle: "Multiple deals everyday",
    },
    {
      img: Delivery,
      title: "Free Delivery",
      subtitle: "Within 10km and minimum order of $50",
    },
    {
      img: Variety,
      title: "Wide Variety",
      subtitle: "Multiple options to choose from",
    },
    {
      img: Open,
      title: "Open 24/7",
      subtitle: "We are open everyday for the whole day",
    },
  ];

  return (
    <div className="features">
      {data.map((item) => {
        return (
          <div className="features-item" key={uuid()}>
            <img src={item.img} />
            <div>
              <h3>{item.title}</h3>
              <p className="features-text">{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
