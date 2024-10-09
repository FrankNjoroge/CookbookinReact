import React from "react";
import { FaTimes } from "react-icons/fa";

const MealModal = ({ meal }) => {
  function generateIngredientsList(meal) {
    let ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredientsList.push(`${ingredient} - ${measure}`);
      } else {
        break;
      }
    }
    return ingredientsList;
  }

  const ingredientsList = generateIngredientsList(meal);

  return (
    <div className="meal-info-container">
      <div className="meal-info">
        <button id="close-popup">
          <FaTimes />
        </button>
        <h2>{meal.strMeal}</h2>

        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <ul className="ingredients">
          {ingredientsList.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
        <p className="meal-description">{meal.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealModal;
