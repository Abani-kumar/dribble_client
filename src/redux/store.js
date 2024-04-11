import { configureStore , combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authslice";

const rootreducer=combineReducers({
    auth:authReducer
})

const store=configureStore({
    reducer:rootreducer
})

export default store;