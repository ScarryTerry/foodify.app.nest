import { Card, CardActions, CardContent, CardMedia, Typography, Link, Grid, Button } from "@mui/material";
import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { IDish } from "../types/types";


interface DishItemProps {
  dish: IDish;
}

const DishItem: FC<DishItemProps> = ({ dish }) => {
  const location = useLocation();

  return (
    <div style={{ display: "inline-block", width: "30%" }}>
      <Card sx={{ maxWidth: 600, margin: 5, paddingBlock: 2 }}>
        <CardMedia
          component="img"
          image={dish.image ? dish.image : "https://images.squarespace-cdn.com/content/v1/54b1510ce4b059ddb550bcff/1556330181601-ZRRM870OJJOFN0PJO2XJ/brooklyn-wedding-photographer-rob-allen-photography-TheGreenBuilding-LU-28.jpg"}
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
            <Button variant="outlined" size="small">Save</Button>
            <Button variant="outlined" size="small">Next</Button>
          </CardActions> :
          <div />
        }
      </Card>
    </div>
  );
};

export default DishItem;
