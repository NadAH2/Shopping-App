import { combineReducers } from "redux";
import authReducer from "./authReducer";

import cartReducer from "./cartRedux";

export default combineReducers({ user: authReducer, cart: cartReducer });
