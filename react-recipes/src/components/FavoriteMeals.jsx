import React from "react";
import { FaCircleXmark } from "react-icons/fa6";

const FavoriteMeals = () => {
  return (
    <div className="fav-container">
      <h3>Favourite meals</h3>
      <ul className="fav-meals">
        <li>
          <img
            src="https://www.themealdb.com/images/ingredients/Lime-Small.png"
            // alt={"meal.strMeal"}
          ></img>
          <span>{"meal.strMeal"}</span>
          <button className="clear">
            {/* <i className="fa-solid fa-circle-xmark"></i> */}
            <FaCircleXmark />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FavoriteMeals;
