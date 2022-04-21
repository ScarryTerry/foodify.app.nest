import { Card, CardActions, CardContent, CardMedia, Typography, Link, Grid, Button } from "@mui/material";
import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { IDish } from "../types/types";


interface DishItemProps {
  dish: IDish;
}

const DishItem: FC<DishItemProps> = ({ dish }) => {
  const location = useLocation();
  const { fetchRandomDish } = useActions();

  return (
    <div style={{ display: "inline-block", width: "30%" }}>
      <Card sx={{ maxWidth: 600, margin: 5, paddingBlock: 2 }}>
        <CardMedia
          component="img"
          image={dish.image ? dish.image : " "}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div">
            {dish.name}
          </Typography>
          <Typography
            variant="body1"
            component="div">
            <h4>Ingredients:</h4>
            {dish.ingredients.map(
              ingText =>
                <Grid key={ingText}>
                  <b>{ingText}</b>: {dish.mesures[dish.ingredients.indexOf(ingText)]}
                </Grid>
            )}
          </Typography>
          <Typography
            paragraph
            variant="body1"
            component="div">
            <h4>Recipe:</h4>
            {dish.instructions}
          </Typography>
          {dish.src !== "" ?
            <Link href={dish.src}><h3>YouTube</h3></Link> :
            <div />}
        </CardContent>
        {location.pathname === "/randomDish" ?
          <CardActions sx={{ pr: 1 }}>
            <Button variant="outlined" size="small" onClick={() => alert("Should save the Dish")}>Save</Button>
            <Button variant="outlined" size="small" onClick={() => fetchRandomDish()}>Next</Button>
          </CardActions> :
          <div />
        }
      </Card>
    </div>
  );
};

export default DishItem;
