export const initialState = {
	isLoading: false,
	bookmarks: [],
	error: null
}

const bookmarksReducer = (state = initialState, action) => {
	switch (action.type) {
		case "IS_LOADING": {
			return { ...state, isLoading: true }
		}

		case "SUCCESS": {
			return { ...state, repos: action.bookmarks, isLoading: false }
		}

		case "ERROR": {
			return { ...state, error: action.error, isLoading: false }
		}

		default:
			return { ...state }
	}
}

export default bookmarksReducer
