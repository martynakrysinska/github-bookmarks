// REPOS ACTIONS
export const fetchRepos = repos => dispatch => {
	dispatch({
		type: "SUCCESS",
		repos
	})
}

export const loadRepos = () => dispatch => {
	dispatch({
		type: "IS_LOADING"
	})
}

export const failRepos = error => dispatch => {
	dispatch({
		type: "ERROR",
		error: error
	})
}
// BOOKMARKS ACTIONS
export const setBookmarks = bookmarks => dispatch => {
	dispatch({
		type: "SUCCESS",
		bookmarks
	})
}

export const loadBookmarks = () => dispatch => {
	dispatch({
		type: "IS_LOADING"
	})
}

export const failBookmarks = () => dispatch => {
	dispatch({
		type: "ERROR"
	})
}
