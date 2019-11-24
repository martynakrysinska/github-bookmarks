import axios from "axios"
const { localStorage } = window
// REPOS ACTIONS
export const fetchRepos = keyword => async dispatch => {
	if (!keyword) {
		let error = new Error("You need to provide a search term.")
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

	const { bookmarks } = localStorage

	if (bookmarks) {
		dispatch({
			type: "BOOKMARKS_SUCCESS",
			bookmarks: JSON.parse(bookmarks)
		})
	} else {
		try {
			const response = await axios.get(`http://localhost:4000/bookmarks`)
			const { bookmarks } = response.data.data

			const bookmarksArr = bookmarks.map(bookmark => bookmark[1])

			localStorage.setItem("bookmarks", JSON.stringify(bookmarksArr))

			dispatch({
				type: "BOOKMARKS_SUCCESS",
				bookmarks: bookmarksArr
			})
		} catch (e) {
			dispatch({
				type: "BOOKMARKS_ERROR",
				error: e
			})
		}
	}
}

export const addBookmark = id => async dispatch => {
	try {
		const response = await axios.post(
			`http://localhost:4000/bookmarks/${id}`
		)
		const { bookmarks } = response.data.data

		const bookmarksArr = bookmarks.map(bookmark => bookmark[1])

		localStorage.setItem("bookmarks", JSON.stringify(bookmarksArr))

		dispatch({
			type: "BOOKMARKS_SUCCESS",
			bookmarks: bookmarksArr
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
		const bookmarksArr = bookmarks.map(bookmark => bookmark[1])

		localStorage.setItem("bookmarks", JSON.stringify(bookmarksArr))

		dispatch({
			type: "BOOKMARKS_SUCCESS",
			bookmarks: bookmarksArr
		})
	} catch (e) {
		dispatch({
			type: "BOOKMARKS_ERROR",
			error: e
		})
	}
}
