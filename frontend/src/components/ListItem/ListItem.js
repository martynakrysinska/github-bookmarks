import React from "react"
import ToggleBookmark from "../ToggleBookmark"
import "../../styles/ListItem.scss"
const ListItem = props => {
	const { repo } = props
	const truncate = (str, length) => {
		if (str.length > length) {
			str = str.substring(0, length - 1).concat("...")
		}
		return str
	}
	return (
		<li className="list-item">
			{repo.id ? <ToggleBookmark id={repo.id} /> : <div></div>}
			<p>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={repo.owner.html_url}
				>
					{truncate(repo.owner.login, 15)}
				</a>
			</p>
			{repo.id ? (
				<p>
					<a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
						{truncate(repo.name, 30)}
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
