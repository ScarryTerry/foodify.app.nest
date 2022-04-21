import { DishAction, DishActionTypes, DishState } from "../../types/types";

const initialState: DishState = {
  dish: [{
    id: "FakeId",
    name: "FakeName",
    category: "FakeCategory",
    area: "FakeArea",
    instructions: "FakeInstructions",
    ingredients: [],
    mesures: [],
    image: "FakeImage",
    src: "FakeSrc"
  }],
  loading: false,
  error: null
}

export const dishReducer = (state = initialState, action: DishAction): DishState => {
  switch (action.type) {
    case DishActionTypes.FETCH_DISH:
      return {
        loading: true,
        error: null,
        dish: []
      }
    case DishActionTypes.FETCH_DISH_SUCCESS:
      return { loading: false, error: null, dish: action.payload }
    case DishActionTypes.FETCH_DISH_ERROR:
      return { loading: false, error: action.payload, dish: [] }
    default:
      return state
  }
}
