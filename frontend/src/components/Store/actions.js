// REPOS ACTIONS
export const fetchRepos = data => dispatch => {
	dispatch({
		type: "REPOS_SUCCESS",
		repos: data.items,
		repos_count: data.count
	})
}

export const loadRepos = () => dispatch => {
	dispatch({
		type: "REPOS_IS_LOADING"
	})
}

export const failRepos = error => dispatch => {
	dispatch({
		type: "REPOS_ERROR",
		error: error
	})
}
// BOOKMARKS ACTIONS
export const setBookmarks = bookmarks => dispatch => {
	dispatch({
		type: "BOOKMARKS_SUCCESS",
		bookmarks
	})
}

export const loadBookmarks = () => dispatch => {
	dispatch({
		type: "BOOKMARKS_IS_LOADING"
	})
}

export const failBookmarks = () => dispatch => {
	dispatch({
		type: "BOOKMARKS_ERROR"
	})
}
