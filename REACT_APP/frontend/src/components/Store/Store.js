import reposReducer from "./reposReducer"
import bookmarksReducer from "./bookmarksReducer"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { combineReducers } from "redux"
const appReducer = combineReducers({ reposReducer, bookmarksReducer })
const middlewares = [thunk]

const Store = createStore(appReducer, applyMiddleware(...middlewares))

export default Store
