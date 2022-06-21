import { DishAction, DishActionTypes, IDish } from "../../types/types";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchRandomDish = () => {
  return async (dispatch: Dispatch<DishAction>) => {
    try {
      dispatch({ type: DishActionTypes.FETCH_DISH })
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = response.data.meals[0];
      const digestedData = await digestData(data);

      dispatch({ type: DishActionTypes.FETCH_DISH_SUCCESS, payload: digestedData })
    } catch (e) {
      dispatch({
        type: DishActionTypes.FETCH_DISH_ERROR,
        payload: 'Dish download Error'
      })
    }
  }
}

function digestData(data: any): IDish[] {
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

  return [{
    id: data.idMeal,
    name: data.strMeal,
    category: data.strCategory,
    area: data.strArea,
    instructions: data.strInstructions,
    ingredients: ingredients,
    mesures: measures,
    image: data.strMealThumb,
    src: data.strYoutube
  }]
}
