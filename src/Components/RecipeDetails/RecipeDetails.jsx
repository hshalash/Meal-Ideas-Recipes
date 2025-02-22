import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaYoutube } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getMealData() {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      console.log(data.meals[0]);
      setMeal(data.meals?.[0] || null);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMealData();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        meal && (
          <>
            <div>
              <div className="flex flex-row justify-between px-16">
                <div className="headerAndImage mb-4">
                  <h2 className="headerText mb-5">{meal?.strMeal}</h2>
                  <img
                    src={meal?.strMealThumb}
                    alt=""
                    className="w-100 rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ingredients</h3>
                  <div className="w-100 mx-5 p-2 bg-gray-50 shadow-md bg-opacity-10 rounded-lg">
                    {Object.keys(meal)
                      .filter(
                        (key) => key.startsWith("strIngredient") && meal[key]
                      )
                      .map((key, index) => (
                        <div
                          key={index}
                          className="flex justify-between p-2 border-b"
                        >
                          <span>{meal[key]}</span>
                          <span>{meal[`strMeasure${key.slice(13)}`]}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-2xl font-bold mb-2">Directions</p>

              <div className="w-full  py-5 bg-gray-50 shadow-md bg-opacity-10 rounded-lg px-16">
                <span className="text-sm ">{meal?.strInstructions}</span>
              </div>
            </div>
            <div className="socials flex items-center justify-center">
              <div className="flex items-center justify-center mt-6 gap-4">
                {meal.strYoutube && (
                  <a
                    href={meal.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-red-500 text-white rounded-lg flex items-center"
                  >
                    <FaYoutube className="me-2" /> YouTube
                  </a>
                )}
                {meal.strSource && (
                  <a
                    href={meal.strSource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center"
                  >
                    <FaExternalLinkAlt className="me-2" /> Source
                  </a>
                )}
              </div>
            </div>
          </>
        )
      )}
    </>
  );
}
