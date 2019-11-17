export const initialState = {
	bookmarks: new Map(),
	searchResult: []
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_BOOKMARK":
			return { ...state, bookmarks: action.payload }
		case "SET_SEARCH_RESULT":
			return { ...state, searchResult: action.payload }
		default:
			return { ...state }
	}
}

export default reducer
