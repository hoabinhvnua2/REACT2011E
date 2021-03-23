import {combineReducers} from 'redux';
import test from './test';
import productReduce from './products';


const rootReducer = combineReducers({
    test, productReduce
})

export default rootReducer;