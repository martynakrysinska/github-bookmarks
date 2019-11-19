import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setBookmarks } from "../Store/actions"
import axios from "axios"

const ToggleBookmark = props => {
	const reducer = useSelector(state => state.bookmarksReducer)
	const { bookmarks } = reducer
	const dispatch = useDispatch()
	const isBookmarked = bookmarks.has(props.id)
	const { id } = props
	const addBookmark = async () => {
		try {
			await axios.post(`http://localhost:4000/bookmarks/${id}`)
		} catch (e) {
			console.log(e)
		} finally {
			axios
				.get(`http://localhost:4000/bookmarks`)
				.then(response => {
					const { bookmarks } = response.data.data
					let map = new Map()
					bookmarks.map(bookmark => map.set(bookmark[0], bookmark[1]))
					dispatch(setBookmarks(map))
				})
				.catch(e => {
					console.log(e)
				})
		}
	}
	const deleteBookmark = async () => {
		try {
			await axios.delete(`http://localhost:4000/bookmarks/${id}`)
		} catch (e) {
			console.log(e)
		} finally {
			axios
				.get(`http://localhost:4000/bookmarks`)
				.then(response => {
					const { bookmarks } = response.data.data
					let map = new Map()
					bookmarks.map(bookmark => map.set(bookmark[0], bookmark[1]))
					dispatch(setBookmarks(map))
				})
				.catch(e => {
					console.log(e)
				})
		}
	}

	const toggleBookmark = () => {
		if (isBookmarked) {
			deleteBookmark(props.id)
		} else {
			addBookmark(props.id)
		}
	}
	return (
		<span onClick={toggleBookmark}>{isBookmarked ? " true" : " false"}</span>
	)
}

export default ToggleBookmark
