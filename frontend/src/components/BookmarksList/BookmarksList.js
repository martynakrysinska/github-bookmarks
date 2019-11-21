import React from "react"
import { useSelector } from "react-redux"
import { headline } from "./index"
import ListItem from "../ListItem"
const BookmarksList = () => {
	const reducer = useSelector(state => state.bookmarksReducer)
	const { bookmarks, isLoading, error } = reducer
	const bookmarksArr = [...bookmarks.values()]

	if (isLoading) {
		return <p>Loading...</p>
	} else if (error) {
		return <p>{error.message}</p>
	} else {
		return (
			<div>
				<ul className="repos-list">
					{bookmarksArr && <ListItem repo={headline} />}
					{bookmarksArr &&
						bookmarksArr.map(bookmark => (
							<ListItem key={bookmark.id} repo={bookmark} />
						))}
				</ul>
			</div>
		)
	}
}

export default BookmarksList
