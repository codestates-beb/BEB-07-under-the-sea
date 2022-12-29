import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";

import "./FAQ.css";

const categories = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Category 1",
    value: "category1",
  },
  {
    name: "Category 2",
    value: "category2",
  },
  {
    name: "Category 3",
    value: "category3",
  },
];

const FAQ = () => {
  const [category, setCatecory] = useState("All");

  return (
    <div>
      <CategoryFilter
        categories={categories}
        category={category}
        setCatecory={setCatecory}
      />
      <div className="fqa-parent">
        <div className="faq-list">
        </div>
      </div>
    </div>
  );
};

export default FAQ;