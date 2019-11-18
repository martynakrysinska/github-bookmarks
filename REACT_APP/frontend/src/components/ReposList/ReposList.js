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
					{repos.map(repo => (
						<li key={repo.id}>
							<a target="_blank" href={repo.html_url}>
								{repo.name}
							</a>{" "}
							by {repo.owner.login}
						</li>
					))}
				</ul>
			</div>
		)
	}
}

export default ReposList
