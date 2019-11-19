import React from "react"
import { useSelector } from "react-redux"
import ToggleBookmark from "../ToggleBookmark"
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
				<ul>
					{bookmarksArr
						? bookmarksArr.map(bookmark => (
								<li key={bookmark.id}>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={bookmark.html_url}
									>
										{bookmark.name}
									</a>{" "}
									by {bookmark.owner.login}
									<ToggleBookmark id={bookmark.id} />
								</li>
						  ))
						: null}
				</ul>
			</div>
		)
	}
}

export default BookmarksList
