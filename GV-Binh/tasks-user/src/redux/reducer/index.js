import { combineReducers } from "redux";
import product from './Product';
import user from './User'
import register from './Register'
import auth from './Auth';

const rootReducer = combineReducers({
    product,
    user,
    register,
    auth
})

export default rootReducer;