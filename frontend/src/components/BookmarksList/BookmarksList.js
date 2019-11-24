import React from "react"
import { useSelector } from "react-redux"
import { headline } from "./index"
import ListItem from "../ListItem"
import { GoBookmark } from "react-icons/go"
const BookmarksList = () => {
	const reducer = useSelector(state => state.bookmarksReducer)
	const { bookmarks, isLoading, error } = reducer
	if (isLoading) {
		return (
			<div className="no-repos">
				<p></p>
			</div>
		)
	} else if (error) {
		return (
			<div className="no-repos">
				<p>{error.message}</p>
			</div>
		)
	} else if (bookmarks.length > 0) {
		return (
			<div>
				<ul className="repos-list">
					<ListItem repo={headline} />
					{bookmarks.map(bookmark => (
						<ListItem key={bookmark.id} repo={bookmark} />
					))}
				</ul>
			</div>
		)
	} else {
		return (
			<div className="no-repos">
				<p>
					<GoBookmark className="no-repos-svg" />
					<br></br>
					Your bookmarks are empty.
				</p>
			</div>
		)
	}
}

export default BookmarksList
