import { combineReducers, createStore } from "redux";

// Reduer imports 

import todoReducer from "./reducers/todoReducer";

const reducers = combineReducers({todo: todoReducer})

const store = createStore(reducers)

export default store