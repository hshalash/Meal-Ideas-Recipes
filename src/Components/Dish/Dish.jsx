import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Style from "./Dish.module.scss";
import clsx from "clsx";
import { FcGlobe } from "react-icons/fc";

export default function Dish({ selectedCategory }) {
  const [meals, setMeals] = useState([]);

  async function getDishes() {
    try {
      const url = selectedCategory
        ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        : "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      const { data } = await axios.get(url);
      setMeals(data.meals || []);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDishes();
  }, [selectedCategory]);

  return (
    <>
      <div className="container">
        <div className={Style.mealContainer}>
          {meals?.slice(1).map((meal) => (
            <div
              key={meal.idMeal}
              className={`bg-white ${Style.card} marginTop60 round20 shadow-lg`}
            >
              <div className="round50">
                <div>
                  <img
                    src={meal.strMealThumb}
                    className={`${clsx(
                      Style.imageThumbnail,
                      Style.cardImg
                    )} round100`}
                    alt=""
                  />
                </div>
                <div className={`${Style.paddingTop100}`}>
                  <p className={`${Style.title}`}> {meal.strMeal}</p>
                </div>
                <div className={`${Style.align}`}>
                  <span>
                    {" "}
                    <FcGlobe />
                  </span>
                  <span>{meal.strArea}</span>
                </div>
                <div>
                  <button className={`${Style.button} round20`}>
                    <Link to={`/recipe/${meal.idMeal}`}>View Recipe</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
