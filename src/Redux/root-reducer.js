import { combineReducers } from "redux";
import userReduce from "./User/reduce";
import cartReduce from "./cart/redux";

const rootReducer = combineReducers({userReduce, cartReduce})

export default rootReducer