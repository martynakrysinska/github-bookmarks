import { combineReducers } from "redux"

export const initialState = {
	isLoading: false,
	repos: [],
	error: null
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "IS_LOADING": {
			return { ...state, isLoading: true }
		}

		case "SUCCESS": {
			return { ...state, repos: action.repos, isLoading: false }
		}

		case "ERROR": {
			return { ...state, error: action.error, isLoading: false }
		}

		default:
			return { ...state }
	}
}

const reposReducer = combineReducers({ reducer })
export default reposReducer
