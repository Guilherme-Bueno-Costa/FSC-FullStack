import { useEffect, useState } from "react";
import "./CategoriesStyles.css";
import { type Category } from "../../types/categoryTypes";
import axios from "axios";
import env from "../../config/env.config";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`);

      setCategories(data);
    } catch (error) {
      console.log({ error });
    }
  };


  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="categories-container">
      <div className="categorie-content">{}</div>
    </div>
  );
};

export default Categories;
