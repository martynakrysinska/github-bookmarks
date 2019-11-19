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
				<p>Loading...</p>
			</div>
		)
	} else if (error) {
		return (
			<div className="repos-list-container">
				<p>{error.message}</p>
			</div>
		)
	} else {
		return (
			<div className="repos-list-container">
				<ul>
					{repos ? <ListItem repo={headline} /> : <div></div>}
					{repos && repos.map(repo => <ListItem key={repo.id} repo={repo} />)}
				</ul>
			</div>
		)
	}
}

export default ReposList
