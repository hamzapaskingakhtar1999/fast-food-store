import React, { useContext } from "react";

/* Import CSS */
import "./Categories.css";

/* RR DOM */
import { useNavigate } from "react-router-dom";

/* Images */
import Burgers from "../../assets/Burger.png";
import Dessert from "../../assets/Dessert.png";
import Drinks from "../../assets/Drinks.png";
import Pizza from "../../assets/Pizza.png";
import Shakes from "../../assets/Shakes.png";
import Steak from "../../assets/Steak.png";
import { SearchContext } from "../../context/SearchContext";

/* UUID */
import uuid from "react-uuid";

const Data = [
  {
    img: Burgers,
    title: "Burgers",
    items: 5,
    color: "#D2EFE1",
  },
  {
    img: Pizza,
    title: "Pizza",
    items: 8,
    color: "#FEEFEA",
  },
  {
    img: Dessert,
    title: "Desert",
    items: 5,
    color: "#D2EFE1",
  },
  {
    img: Shakes,
    title: "Shakes",
    items: 5,
    color: "#E9ECF4",
  },
  {
    img: Drinks,
    title: "Drinks",
    items: 5,
    color: "#D2EFE1",
  },
  {
    img: Steak,
    title: "Steaks",
    items: 5,
    color: "#FEEFEA",
  },
];

const Categories = () => {
  const { category, setCategory } = useContext(SearchContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="categories center">
        {Data.map((item) => {
          return (
            <div
              className="categories-item"
              style={{ backgroundColor: item.color }}
              onClick={(e) => {
                setCategory(item.title);
                navigate("/menu");
              }}
              key={uuid()}
            >
              <img src={item.img} className="category-image" />
              <h3 style={{ color: "#29A56C" }} className="categories-heading">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
