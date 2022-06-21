import { Dispatch } from "redux";
import axios from "axios";
import { DishesAction, DishesActionTypes } from "../../types/types";

// export const fetchDishes = (page = 1, limit = 10) => {
//     return async (dispatch: Dispatch<DishesAction>) => {
//         try {
//             dispatch({type: DishesActionTypes.FETCH_DISHES})
//             const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
//                 params: {_page: page, _limit: limit}
//             })
//             setTimeout(() => {
//                 dispatch({type: DishesActionTypes.FETCH_DISHES_SUCCESS, payload: response.data})
//             }, 500)
//         } catch (e) {
//             dispatch({
//                 type: DishesActionTypes.FETCH_DISHES_ERROR,
//                 payload: 'Dishes dwnload error'
//             })
//         }
//     }
// }
// export function setTodoPage(page: number): DishesAction {
//     return {type: DishesActionTypes.SET_DISHES_PAGE, payload: page}
// }
