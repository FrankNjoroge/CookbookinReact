import React, { useState, useEffect } from "react";
import FavoriteMeal from "./FavoriteMeal";

const FavoriteMealsList = ({ favMeals, toggleFavorites }) => {
  return (
    <div className="fav-container">
      <h3>Favourite meals</h3>
      <ul className="fav-meals">
        {favMeals.map((meal) => (
          <FavoriteMeal
            key={meal.idMeal}
            meal={meal}
            toggleFavorites={toggleFavorites}
          />
        ))}
      </ul>
    </div>
  );
};

export default FavoriteMealsList;
