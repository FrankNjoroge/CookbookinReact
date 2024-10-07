import React from "react";
import { FaHeart } from "react-icons/fa6";

const Meal = () => {
  let random = true;
  return (
    <>
      <div className="meal-header">
        {random ? <span className="random"> Random recipe </span> : ""}
        <img
          src="https://www.themealdb.com/images/ingredients/Lime-Small.png
"
          alt={"mealData.strMeal"}
        />
      </div>
      <div className="meal-body">
        <h4>{"mealData.strMeal"}</h4>
        <button className="fav-btn">
          {/* <i className="fas fa-heart"></i> */}
          <FaHeart />
        </button>
      </div>
    </>
  );
};

export default Meal;
