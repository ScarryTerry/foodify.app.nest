export interface IDish {
  id: string,
  name: string,
  category?: string,
  area?: string,
  instructions: string,
  ingredients: string[],
  mesures: string[],
  image?: string,
  src?: string
}
// DISH STORE TYPES
export interface DishState {
  dish: IDish[];
  loading: boolean;
  error: null | string;
}

export enum DishActionTypes {
  FETCH_DISH = 'FETCH_DISH',
  FETCH_DISH_SUCCESS = 'FETCH_DISH_SUCCESS',
  FETCH_DISH_ERROR = 'FETCH_DISH_ERROR',
}
interface FetchDishAction {
  type: DishActionTypes.FETCH_DISH;
}
interface FetchDishSuccessAction {
  type: DishActionTypes.FETCH_DISH_SUCCESS;
  payload: IDish[]
}
interface FetchDishErrorAction {
  type: DishActionTypes.FETCH_DISH_ERROR;
  payload: string;
}
export type DishAction = FetchDishAction | FetchDishSuccessAction | FetchDishErrorAction

////DISHES STORE TYPES
export interface DishesState {
  dishes: IDish[];
  loading: boolean;
  error: null | string;
  page?: number;
  limit?: number;
}

export enum DishesActionTypes {
  FETCH_DISHES = 'FETCH_DISHES',
  FETCH_DISHES_SUCCESS = 'FETCH_DISHES_SUCCESS',
  FETCH_DISHES_ERROR = 'FETCH_DISHES_ERROR',
  SET_DISHES_PAGE = 'SET_DISHES_PAGE'
}
interface FetchDishesAction {
  type: DishesActionTypes.FETCH_DISHES
}
interface FetchDishesSuccessAction {
  type: DishesActionTypes.FETCH_DISHES_SUCCESS;
  payload: IDish[];
}
interface FetchDishesErrorAction {
  type: DishesActionTypes.FETCH_DISHES_ERROR;
  payload: string;
}
interface SetDishesPage {
  type: DishesActionTypes.SET_DISHES_PAGE;
  payload: number;
}

export type DishesAction =
  FetchDishesAction
  | FetchDishesSuccessAction
  | FetchDishesErrorAction
  | SetDishesPage
