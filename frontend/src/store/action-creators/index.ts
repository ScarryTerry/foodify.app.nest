import * as DishActionCreators from './dish'
import * as DishesActionCreators from './dishes'

export default {
    ...DishActionCreators,
    ...DishesActionCreators
}
