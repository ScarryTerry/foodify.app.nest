import React from "react";

interface DishListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode
}

export default function ListOfDishes<T>(props: DishListProps<T>) {
  return (
    <div> 
      {props.items.map(props.renderItem)}
    </div>
  )
}
