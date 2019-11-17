import reducer, { initialState } from "./reducer"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

const middlewares = [thunk]
const Store = createStore(
	reducer,
	initialState,
	applyMiddleware(...middlewares)
)

export default Store
