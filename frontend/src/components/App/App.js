import React from "react"
import "../../App.css"
import * as ROUTES from "../../constants/routes"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Navigation, Home, Bookmarks } from "../index"

function App() {
	return (
		<Router>
			<div>
				<Navigation />
				<hr />
				<Route exact path={ROUTES.HOME} component={Home} />
				<Route path={ROUTES.BOOKMARKS} component={Bookmarks} />
			</div>
		</Router>
	)
}

export default App
