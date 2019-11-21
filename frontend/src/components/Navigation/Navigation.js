import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import * as ROUTES from "../../constants/routes"
import { GoBookmark, GoSearch } from "react-icons/go"
import "../../styles/Navigation.scss"
const Navigation = () => {
	const reducer = useSelector(state => state)
	const bookmarks_count = reducer.bookmarksReducer.bookmarks.size
	const repos_count = reducer.reposReducer.repos_count || 0
	return (
		<div className="navigation-container">
			<div className="navigation-grid">
				<Link to={ROUTES.HOME}>
					{repos_count}
					<hr></hr>
					<GoSearch />
				</Link>

				<Link to={ROUTES.BOOKMARKS}>
					{bookmarks_count}
					<hr></hr>
					<GoBookmark />
				</Link>
			</div>
		</div>
	)
}

export default Navigation
