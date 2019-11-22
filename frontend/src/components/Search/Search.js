import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchRepos } from "../Store/actions"
import "../../styles/Search.scss"

const Search = () => {
	const [keyword, setKeyword] = useState("")
	const dispatch = useDispatch()

	const handleSubmit = async e => {
		e.preventDefault()
		dispatch(fetchRepos(keyword))
	}

	return (
		<div className="search-container">
			<form className="search-form" onSubmit={handleSubmit}>
				<input
					placeholder="Search repositories, e.g. 'github bookmarks' "
					value={keyword}
					type="text"
					onChange={e => setKeyword(e.target.value)}
				></input>
				<button type="submit">Search</button>
			</form>
		</div>
	)
}

export default Search
