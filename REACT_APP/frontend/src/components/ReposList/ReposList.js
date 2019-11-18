import React from "react"
import { useSelector } from "react-redux"

const ReposList = () => {
	const reducer = useSelector(state => state.reducer)
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
									<a href={repo.url}>{repo.name}</a> by {repo.owner.login}
								</li>
						  ))
						: null}
				</ul>
			</div>
		)
	}
}

export default ReposList
