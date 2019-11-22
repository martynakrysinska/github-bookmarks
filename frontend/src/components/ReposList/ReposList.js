import React from "react"
import { useSelector } from "react-redux"
import ListItem from "../ListItem"
import { headline } from "../BookmarksList"
import "../../styles/ReposList.scss"

const ReposList = () => {
	const reducer = useSelector(state => state.reposReducer)
	const { repos, isLoading, error } = reducer
	if (isLoading) {
		return (
			<div className="repos-list-container">
				<div className="no-repos">
					<p>Loading...</p>
				</div>
			</div>
		)
	} else if (error) {
		return (
			<div className="repos-list-container">
				<div className="no-repos">{error.message}</div>
			</div>
		)
	} else if (repos.length > 0) {
		return (
			<div className="repos-list-container">
				<ul className="repos-list">
					<ListItem repo={headline} />
					{repos.map(repo => (
						<ListItem key={repo.id} repo={repo} />
					))}
				</ul>
			</div>
		)
	} else {
		return (
			<div className="repos-list-container">
				<p className="no-repos">No repositories</p>
			</div>
		)
	}
}

export default ReposList
