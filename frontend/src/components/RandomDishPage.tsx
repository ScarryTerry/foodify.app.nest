import { FC, useEffect } from "react";
import DishItem from "./DishItem";
import { CircularProgress, Grid } from "@mui/material";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const RandomDishPage: FC = () => {
  const { dish, error, loading } = useTypedSelector(state => state.dish);
  const { fetchRandomDish } = useActions();

  useEffect(() => {
    fetchRandomDish();
  }, []);

  if (loading) {
    return <CircularProgress color="success" />
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center">
      <DishItem dish={dish[0]} />
    </Grid>
  )
}

export default RandomDishPage;
