import React from "react";
import { FaCircleXmark } from "react-icons/fa6";

const FavoriteMeal = ({ meal, toggleFavorites }) => {
  return (
    <li>
      <img src={meal.strMealThumb} alt={meal.strMeal}></img>
      <span>{meal.strMeal}</span>
      <button className="clear">
        <FaCircleXmark onClick={() => toggleFavorites(meal)} />
      </button>
    </li>
  );
};

export default FavoriteMeal;
