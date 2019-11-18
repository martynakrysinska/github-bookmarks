import reposReducer from "./reposReducer"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

const middlewares = [thunk]

const Store = createStore(reposReducer, applyMiddleware(...middlewares))

export default Store
