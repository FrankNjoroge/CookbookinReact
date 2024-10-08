import React from "react";
import { FaHeart } from "react-icons/fa6";

const Meal = ({ meal, isRandom, favMeals, toggleFavorites }) => {
  const isLiked = favMeals.some((fav) => fav.idMeal === meal.idMeal);
  return (
    <div className="meals">
      <div className="meal">
        <div className="meal-header">
          {isRandom && <span className="random"> Random recipe </span>}
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
        <div className="meal-body">
          <h4>{meal.strMeal}</h4>
          <button className="fav-btn">
            <FaHeart
              onClick={() => toggleFavorites(meal)}
              style={{ color: isLiked ? "red" : "" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
