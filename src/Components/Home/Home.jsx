import Style from "./Home.module.scss";
import clsx from "clsx";
import Dish from "../Dish/Dish";
import Categories from "../Categories/Categories";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className={clsx(Style.headerCenter)}>
      <h1 className={`headerText gradientText`}>Learn, Cook, Eat Your Food</h1>
      <div>
        <Categories setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      </div>
      <div>
        <Dish selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
