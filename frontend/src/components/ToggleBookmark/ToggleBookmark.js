import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addBookmark, deleteBookmark } from "../Store/actions"
import "../../styles/ListItem.scss"
import { GoBookmark } from "react-icons/go"

const ToggleBookmark = props => {
	const reducer = useSelector(state => state.bookmarksReducer)
	const { bookmarks } = reducer
	const dispatch = useDispatch()
	const isBookmarked = bookmarks.has(props.id)
	const { id } = props

	const addOne = () => {
		dispatch(addBookmark(id))
	}
	const deleteOne = () => {
		dispatch(deleteBookmark(id))
	}

	const toggleBookmark = e => {
		e.stopPropagation()
		if (isBookmarked) {
			deleteOne()
		} else {
			addOne()
		}
	}
	return (
		<div className="svg-container">
			<GoBookmark
				className={isBookmarked ? "marked" : "unmarked"}
				onClick={toggleBookmark}
			/>
		</div>
	)
}

export default ToggleBookmark
