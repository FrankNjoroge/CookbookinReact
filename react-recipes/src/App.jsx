import { useEffect, useState } from "react";
import FavoriteMeals from "./components/FavoriteMeals";
import SearchBar from "./components/SearchBar";
import Meal from "./components/Meal";
import MainLayout from "./layout/MainLayout";

function App() {
  const [randomMeal, setRandomMeal] = useState("");
  useEffect(() => {
    const getRandommeal = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();
      const meal = await data.meals[0];

      setRandomMeal(meal);
    };
    getRandommeal();
  }, []);
  return (
    <MainLayout>
      <SearchBar />
      <FavoriteMeals />
      <Meal meal={randomMeal} />
    </MainLayout>
  );
}

export default App;
