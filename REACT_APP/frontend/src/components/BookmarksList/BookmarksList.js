import React from "react"
import { useSelector } from "react-redux"

const BookmarksList = () => {
	const reducer = useSelector(state => state.bookmarksReducer)
	const { bookmarks, isLoading, error } = reducer

	if (isLoading) {
		return <p>Loading...</p>
	} else if (error) {
		return <p>{error.message}</p>
	} else {
		return (
			<div>
				<ul>
					{bookmarks
						? bookmarks.map(bookmark => (
								<li key={bookmark.id}>
									{/* <a target="_blank" href={bookmark.html_url}>
										{bookmark.name}
									</a>{" "}
                                    by {bookmark.owner.login} */}
									1
								</li>
						  ))
						: null}
				</ul>
			</div>
		)
	}
}

export default BookmarksList
