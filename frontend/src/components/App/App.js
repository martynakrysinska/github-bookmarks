import React, { useEffect } from "react"
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
				let map = new Map()
				bookmarks.map(bookmark => map.set(bookmark[0], bookmark[1]))
				console.log(map)
				dispatch(setBookmarks(map))
			} catch (e) {
				dispatch(failBookmarks(e))
			}
		}
		fetchBookmarks()
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
