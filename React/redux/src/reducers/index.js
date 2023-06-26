import { combineReducers } from "redux";     //root reducer
import ProductsReducer from './Products.js'     //reducer
const rootReducer = combineReducers(
    {
        products: ProductsReducer,   //state is empy array
       
    }
)
export default rootReducer;