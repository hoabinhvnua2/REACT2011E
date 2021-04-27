import { combineReducers } from "redux";
import product from './Product';
import user from './User'
import register from './Register'

const rootReducer = combineReducers({
    product,
    user,
    register
})

export default rootReducer;