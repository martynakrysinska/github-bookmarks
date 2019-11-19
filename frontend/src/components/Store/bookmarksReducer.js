export const initialState = {
	isLoading: false,
	bookmarks: new Map(),
	error: null
}

const bookmarksReducer = (state = initialState, action) => {
	switch (action.type) {
		case "BOOKMARKS_IS_LOADING": {
			return { ...state, isLoading: true }
		}

		case "BOOKMARKS_SUCCESS": {
			return { ...state, bookmarks: action.bookmarks, isLoading: false }
		}

		case "BOOKMARKS_ERROR": {
			return { ...state, error: action.error, isLoading: false }
		}

		default:
			return { ...state }
	}
}

export default bookmarksReducer
