import React from "react"
import ToggleBookmark from "../ToggleBookmark"
import "../../styles/ListItem.scss"
const ListItem = props => {
	const { repo } = props
	return (
		<li className="list-item">
			{repo.id ? <ToggleBookmark id={repo.id} /> : <div></div>}
			<p>{repo.owner.login}</p>
			{repo.id ? (
				<p>
					<a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
						{repo.name}
					</a>
				</p>
			) : (
				<p>REPOSITORY</p>
			)}
			<p>{repo.language}</p>
			<p>{repo.stargazers_count}</p>
			<p>{repo.forks_count}</p>
		</li>
	)
}

export default ListItem
