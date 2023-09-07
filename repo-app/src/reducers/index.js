import { applyMiddleware } from "redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import reposReducer from "./reposReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

export const store = configureStore({
	reducer: combineReducers({
		repos: reposReducer,
	}),
},
	composeWithDevTools(applyMiddleware(thunk)))