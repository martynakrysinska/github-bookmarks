export const initialState = {
	isLoading: false,
	repos: [],
	error: null
}

const reposReducer = (state = initialState, action) => {
	switch (action.type) {
		case "REPOS_IS_LOADING": {
			return { ...state, isLoading: true }
		}

		case "REPOS_SUCCESS": {
			return { ...state, repos: action.repos, isLoading: false }
		}

		case "REPOS_ERROR": {
			return { ...state, error: action.error, isLoading: false }
		}

		default:
			return { ...state }
	}
}

export default reposReducer
