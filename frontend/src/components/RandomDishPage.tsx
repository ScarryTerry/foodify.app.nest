import { FC, useEffect, useState } from "react";
import axios from "axios";
import { IDish } from "../types/types";
import DishItem from "./DishItem";
import { Grid } from "@mui/material";

export const RandomDishPage: FC = () => {
  const [dish, setSetDishes] = useState<IDish>({
    id: "",
    name: "",
    category: "",
    area: "",
    instructions: "",
    ingredients: [],
    mesures: [],
    image: "",
    src: ""
  });
  useEffect(() => {
    fetchDish()
  }, []);

  async function fetchDish() {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = response.data.meals[0];
      const digestedData = await digestData(data);

      setSetDishes(digestedData);
    } catch (e) {
      console.error(e);
    }
  }

  function digestData(data: any): IDish {
    let ingredients = [];
    let measures = [];

    for (const key in data) {
      for (let i = 1; i <= 20; i++) {
        if (key === `strIngredient${i}`) {
          ingredients.push((data[key]));
        }
        if (key === `strMeasure${i}`) {
          measures.push(data[key]);
        }
      }
    }

    ingredients = ingredients.filter(el => el !== null && el !== "");
    measures = measures.filter(el => el !== null && el !== "");

    return {
      id: data.idMeal,
      name: data.strMeal,
      category: data.strCategory,
      area: data.strArea,
      instructions: data.strInstructions,
      ingredients: ingredients,
      mesures: measures,
      image: data.strMealThumb,
      src: data.strYoutube
    }
  }

  return (
    <Grid 
    container
    direction="column"
    alignItems="center"
    justifyContent="center">
      <DishItem dish={dish} />
    </Grid>
  )
}

export default RandomDishPage;
