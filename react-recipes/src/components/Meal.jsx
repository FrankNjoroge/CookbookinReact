import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";

const Meal = ({ meal, random }) => {
  const [isLiked, setisLiked] = useState(false);

  function handleisLiked() {
    const newLikedState = !isLiked;
    setisLiked(newLikedState);

    const favMeals = JSON.parse(localStorage.getItem("favMeals")) || [];

    if (newLikedState) {
      favMeals.push(meal);
      localStorage.setItem("favMeals", JSON.stringify(favMeals));
    } else {
      const updatedFavMeals = favMeals.filter(
        (fav) => fav.idMeal !== meal.idMeal
      );
      localStorage.setItem("favMeals", JSON.stringify(updatedFavMeals));
    }
  }

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
            <FaHeart
              onClick={handleisLiked}
              style={{ color: isLiked ? "red" : "" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
