import React from "react";
import { FaHeart } from "react-icons/fa6";

const Meal = ({ meal, random }) => {
  return (
    <div className="meals">
      <div className="meal">
        <div className="meal-header">
          {random && <span className="random"> Random recipe </span>}
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
        <div className="meal-body">
          <h4>{meal.strMeal}</h4>
          <button className="fav-btn">
            {/* <i className="fas fa-heart"></i> */}
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
