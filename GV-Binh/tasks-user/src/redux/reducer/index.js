import { combineReducers } from "redux";
import product from './Product';
import user from './User'

const rootReducer = combineReducers({
    product,
    user
})

export default rootReducer;