import React, { useState, useContext, useEffect } from "react";

/* CSS File*/
import "./Menu.css";

/* Data */
import { main } from "../../data/HeroData";
import { AllItemsData } from "../../data/ItemsData";

/* Component */
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import Product from "../../components/product/Product";
import { SearchContext } from "../../context/SearchContext";

import Categories from "../../components/categories/Categories";

const Menu = () => {
  const [search, setSearch] = useState("");
  const { category, setCategory } = useContext(SearchContext);

  return (
    <div>
      <div style={{ margin: "auto", maxWidth: "100%" }}>
        <div className="menu-search-container">
          <input
            type="text"
            placeholder="Search for Item"
            onChange={(e) => setSearch(e.target.value)}
            className="menu-search"
          />
          <Categories />
        </div>

        {search != "" ? (
          <Product
            data={AllItemsData.filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )}
          />
        ) : (
          <Product
            data={AllItemsData.filter((item) =>
              item.category.toLowerCase().includes(category.toLowerCase())
            )}
          />
        )}
      </div>

      <Hero data={main} />
      <div className="center">
        <Features />
      </div>
    </div>
  );
};

export default Menu;
