import { useEffect, useState } from "react";
import FavoriteMealsList from "./components/FavoriteMealsList";
import SearchBar from "./components/SearchBar";
import Meal from "./components/Meal";
import MainLayout from "./layout/MainLayout";
import { HashLoader } from "react-spinners";

function App() {
  const [randomMeal, setRandomMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favMeals, setFavMeals] = useState([]);

  useEffect(() => {
    //fetch a random meal
    const getRandommeal = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const data = await res.json();
        setRandomMeal(data.meals[0]);
      } catch (err) {
        console.log("error loading ", err);
      } finally {
        setLoading(false);
      }
    };
    getRandommeal();

    //retrieve favorite meals from LS
    const storedFavMeals = JSON.parse(localStorage.getItem("favMeals"));
    setFavMeals(storedFavMeals);
  }, []);

  //handle toggling likes on meals
  function toggleFavorites(meal) {
    const mealIsLiked = favMeals.some((fav) => fav.idMeal === meal.idMeal);
    let updatedFavMeals;
    if (mealIsLiked) {
      updatedFavMeals = favMeals.filter((fav) => fav.idMeal !== meal.idMeal);
    } else {
      updatedFavMeals = [...favMeals, meal];
    }
    setFavMeals(updatedFavMeals);
    localStorage.setItem("favMeals", JSON.stringify(updatedFavMeals));
  }
  return (
    <MainLayout>
      <SearchBar />
      <FavoriteMealsList
        favMeals={favMeals}
        toggleFavorites={toggleFavorites}
      />
      {loading ? (
        <HashLoader className="loader" />
      ) : (
        <Meal
          isRandom={true}
          randomMeal={randomMeal}
          favMeals={favMeals}
          toggleFavorites={toggleFavorites}
        />
      )}
    </MainLayout>
  );
}

export default App;
