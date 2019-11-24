import React from "react"
import { useSelector } from "react-redux"
import ListItem from "../ListItem"
import { headline } from "../BookmarksList"
import "../../styles/ReposList.scss"
import { GoMarkGithub, GoReport } from "react-icons/go"
const ReposList = () => {
	const reducer = useSelector(state => state.reposReducer)
	const { repos, isLoading, error } = reducer

	if (isLoading) {
		return (
			<div className="repos-list-container">
				<div className="spin no-repos">
					<p></p>
				</div>
			</div>
		)
	} else if (error) {
		return (
			<div className="repos-list-container">
				<div className="no-repos">
					<GoReport className="no-repos-svg" />
					<br></br>
					{error.message}
				</div>
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
				<p className="no-repos">
					<span className="github-mark-container">
						<GoMarkGithub className="no-repos-svg" />
					</span>
					<br></br>No repositories found.
				</p>
			</div>
		)
	}
}

export default ReposList
