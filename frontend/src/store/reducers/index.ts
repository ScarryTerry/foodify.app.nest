import { combineReducers } from "redux";
import { dishReducer } from "./dishReducer";
import { dishesReducer } from "./dishesReducer";


export const rootReducer = combineReducers({
    dish: dishReducer,
    dishes: dishesReducer
})

export type RootState = ReturnType<typeof rootReducer>
