export const initialState = {
	isLoading: false,
	repos: [],
	error: null,
	repos_count: 0
}

const reposReducer = (state = initialState, action) => {
	switch (action.type) {
		case "REPOS_IS_LOADING": {
			return { ...state, isLoading: true, repos_count: 0 }
		}

		case "REPOS_SUCCESS": {
			return {
				...state,
				isLoading: false,
				repos: action.repos,
				repos_count: action.repos_count
			}
		}

		case "REPOS_ERROR": {
			return {
				...state,
				error: action.error,
				isLoading: false,
				repos_count: 0
			}
		}

		default:
			return { ...state }
	}
}

export default reposReducer
