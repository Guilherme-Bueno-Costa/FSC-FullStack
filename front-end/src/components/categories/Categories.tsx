import { useState } from "react";
import "./CategoriesStyles.css";
import { type Category } from "../../types/categoryTypes";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  return (
    <div className="categories-container">
      <div className="categorie-content">{}</div>
    </div>
  );
};

export default Categories;
