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
		payload: error
	})
}
