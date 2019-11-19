import React from "react"
import { useSelector } from "react-redux"
import ToggleBookmark from "../ToggleBookmark"

const ReposList = () => {
	const reducer = useSelector(state => state.reposReducer)
	const { repos, isLoading, error } = reducer

	if (isLoading) {
		return <p>Loading...</p>
	} else if (error) {
		return <p>{error.message}</p>
	} else {
		return (
			<div>
				<ul>
					{repos
						? repos.map(repo => (
								<li key={repo.id}>
									<a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
										{repo.name}
									</a>{" "}
									by {repo.owner.login}
									<ToggleBookmark id={repo.id} />
								</li>
						  ))
						: null}
				</ul>
			</div>
		)
	}
}

export default ReposList
