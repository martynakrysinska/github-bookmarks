import axios from "axios"

// REPOS ACTIONS
export const fetchRepos = keyword => async dispatch => {
	if (!keyword) {
		let error = new Error("You need to provide a search term")
		return dispatch({
			type: "REPOS_ERROR",
			error
		})
	}

	dispatch({
		type: "REPOS_IS_LOADING"
	})
	try {
		const response = await axios.get(
			`http://localhost:4000/search?q=${keyword}`
		)
		const { items } = response.data.data
		dispatch({
			type: "REPOS_SUCCESS",
			repos: items,
			repos_count: response.data.data.count
		})
	} catch (e) {
		dispatch({
			type: "REPOS_ERROR",
			error: e
		})
	}
}

// BOOKMARKS ACTIONS
export const setBookmarks = () => async dispatch => {
	dispatch({
		type: "BOOKMARKS_IS_LOADING"
	})
	try {
		const response = await axios.get(`http://localhost:4000/bookmarks`)
		const { bookmarks } = response.data.data
		let map = new Map()
		bookmarks.map(bookmark => map.set(bookmark[0], bookmark[1]))
		dispatch({
			type: "BOOKMARKS_SUCCESS",
			bookmarks: map
		})
	} catch (e) {
		dispatch({
			type: "BOOKMARKS_ERROR",
			error: e
		})
	}
}

export const addBookmark = id => async dispatch => {
	try {
		const response = await axios.post(
			`http://localhost:4000/bookmarks/${id}`
		)
		const { bookmarks } = response.data.data
		let map = new Map()
		bookmarks.map(bookmark => map.set(bookmark[0], bookmark[1]))
		dispatch({
			type: "BOOKMARKS_SUCCESS",
			bookmarks: map
		})
	} catch (e) {
		dispatch({
			type: "BOOKMARKS_ERROR",
			error: e
		})
	}
}

export const deleteBookmark = id => async dispatch => {
	try {
		const response = await axios.delete(
			`http://localhost:4000/bookmarks/${id}`
		)
		const { bookmarks } = response.data.data
		let map = new Map()
		bookmarks.map(bookmark => map.set(bookmark[0], bookmark[1]))
		dispatch({
			type: "BOOKMARKS_SUCCESS",
			bookmarks: map
		})
	} catch (e) {
		dispatch({
			type: "BOOKMARKS_ERROR",
			error: e
		})
	}
}
