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
				<div>
					{repos_count}
					<hr></hr>
					<Link to={ROUTES.HOME}>
						<GoSearch />
					</Link>
				</div>

				<div>
					{bookmarks_count}
					<hr></hr>
					<Link to={ROUTES.BOOKMARKS}>
						<GoBookmark />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navigation
