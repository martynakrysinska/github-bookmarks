import React, { useEffect } from "react"
import * as ROUTES from "../../constants/routes"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Navigation, Home, Bookmarks } from "../index"
import { useDispatch } from "react-redux"
import { setBookmarks } from "../Store/actions"

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setBookmarks())
	}, [dispatch])

	return (
		<Router>
			<div className="app-container">
				<Navigation />

				<Route exact path={ROUTES.HOME} component={Home} />
				<Route path={ROUTES.BOOKMARKS} component={Bookmarks} />
			</div>
		</Router>
	)
}

export default App
