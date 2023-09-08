import React from "react";
import Hero from "../../components/hero/Hero";
import Categories from "../../components/categories/Categories";
import Features from "../../components/features/Features";
import Product from "../../components/product/Product";
import Best from "../../components/bestseller/Best";

/* Data */
import { main, secondary } from "../../data/HeroData";
import { DealsData } from "../../data/ItemsData";
import { BestData } from "../../data/BestData";

const Home = () => {
  return (
    <div className="home">
      <Hero data={main} />
      <div className="">
        <Features />
      </div>

      <div className="main-heading-container">
        <h1 className="main-headings">Categories</h1>
      </div>
      <div className="center">
        <Categories />
      </div>

      <div className="main-heading-container">
        <h1 className="main-headings" id="deals">
          Deals of the Day
        </h1>
      </div>
      <div className="center">
        <Product data={DealsData} />
      </div>

      <div className="main-heading-container">
        <h1 className="main-headings">Best Sellers</h1>
      </div>
      <div className="center">
        <Best data={BestData} />
      </div>

      <Hero data={secondary} />
    </div>
  );
};

export default Home;
