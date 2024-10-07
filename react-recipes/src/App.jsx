import { useEffect, useState } from "react";
import FavoriteMeals from "./components/FavoriteMeals";
import SearchBar from "./components/SearchBar";
import Meal from "./components/Meal";
import MainLayout from "./layout/MainLayout";
import { HashLoader } from "react-spinners";

function App() {
  const [randomMeal, setRandomMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  return (
    <MainLayout>
      <SearchBar />
      <FavoriteMeals />
      {loading ? (
        <HashLoader className="loader" />
      ) : (
        <Meal random={true} meal={randomMeal} />
      )}
    </MainLayout>
  );
}

export default App;
