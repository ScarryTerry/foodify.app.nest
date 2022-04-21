import { DishesAction, DishesActionTypes, DishesState } from "../../types/types";

const initialState: DishesState = {
    dishes: [],
    // page: 1,
    // limit: 10,
    error: null,
    loading: false
}

export const dishesReducer = (state = initialState, action: DishesAction): DishesState => {
    switch (action.type) {
        case DishesActionTypes.FETCH_DISHES:
            return { ...state, loading: true }
        case DishesActionTypes.FETCH_DISHES_SUCCESS:
            return { ...state, loading: false, dishes: action.payload }
        case DishesActionTypes.FETCH_DISHES_ERROR:
            return { ...state, loading: false, error: action.payload }
        // case DishesActionTypes.FETCH_DISHES_PAGE:
        //     return {...state, page: action.payload}
        default:
            return state
    }
}
