import React from "react";
import Meal from "./Meal";

const SearchedMealsList = ({
  searchedMeals: meals,
  favMeals,
  toggleFavorites,
}) => {
  return meals.map((meal) => (
    <Meal
      isRandom={false}
      meal={meal}
      key={meal.idMeal}
      favMeals={favMeals}
      toggleFavorites={toggleFavorites}
    />
  ));
};

export default SearchedMealsList;
