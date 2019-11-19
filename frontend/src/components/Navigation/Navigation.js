import React from "react"
import { Link } from "react-router-dom"
import * as ROUTES from "../../constants/routes"
import "../../styles/Navigation.scss"
const Navigation = () => {
	return (
		<div className="navigation-container">
			<div className="navigation-grid">
				<Link to={ROUTES.HOME}>Home</Link>

				<Link to={ROUTES.BOOKMARKS}>Bookmarks</Link>
			</div>
		</div>
	)
}

export default Navigation
