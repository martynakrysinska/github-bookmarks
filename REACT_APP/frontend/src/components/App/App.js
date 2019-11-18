import React, { useEffect } from "react"
import "../../App.css"
import * as ROUTES from "../../constants/routes"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Navigation, Home, Bookmarks } from "../index"
import { useDispatch } from "react-redux"
import {
	setBookmarks,
	failBookmarks,
	loadBookmarks
} from "../Store/actions"

import axios from "axios"

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchBookmarks = async () => {
			try {
				dispatch(loadBookmarks())
				const response = await axios.get(`http://localhost:4000/bookmarks`)
				const { bookmarks } = response.data.data
				dispatch(setBookmarks(bookmarks))
			} catch (e) {
				dispatch(failBookmarks(e))
			}
		}
		fetchBookmarks()
	}, [])

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
