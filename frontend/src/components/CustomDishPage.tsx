import { FC, useEffect, useState } from "react";
import axios from "axios";
import ListOfDishes from "./ListOfDishes";
import { IDish } from "../types/types";
import DishItem from "./DishItem";
import { Grid } from "@mui/material";

export const CustomDishPage: FC = () => {
  const [dishes, setSetDishes] = useState<IDish[]>([]);

  useEffect(() => {
    fetchDishes();
  }, []);


  async function fetchDishes() {
    try {
      // const response = await axios.get<IDish[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      // const response: IDish[] = [
      //   { id: "1", name: "1", instructions: "awdwad", src: "src1" }, 
      //   { id: "2", name: "2", instructions: "hnbghgtrf", src: "src2" }, 
      //   { id: "3", name: "3", instructions: "awdwad", src: "src3" }, 
      //   { id: "4", name: "4", instructions: "awdwad", src: "src4" }];
      // setSetDishes(response);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Grid item xs={3}>
    <ListOfDishes
      items={dishes}
      renderItem={(dish: IDish) => <DishItem dish={dish} key={dish.id} />} />
  </Grid>
  )
}

export default CustomDishPage;
