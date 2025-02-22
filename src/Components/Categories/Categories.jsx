import axios from "axios";
import { useEffect, useState } from "react";
import Style from "./Categories.module.scss";

export default function Categories({ setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      const { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      console.log(data.categories);
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <div className={`${Style.categoryContainer} container`}>
        {categories?.map((item) => (
          <div key={item.idCategory}>
            <button
              className={`${Style.button} round20`}
              onClick={() => setSelectedCategory(item.strCategory)}
            >
              {item.strCategory}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
