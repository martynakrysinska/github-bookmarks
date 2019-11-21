import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { loadRepos, fetchRepos, failRepos } from "../Store/actions"
import "../../styles/Search.scss"
const axios = require("axios")

const Search = () => {
	const [keyword, setKeyword] = useState("")
	const dispatch = useDispatch()

	const handleSubmit = async e => {
		e.preventDefault()

		try {
			dispatch(loadRepos())
			const response = await axios.get(
				`http://localhost:4000/search?q=${keyword}`
			)
			const data = response.data.data
			dispatch(fetchRepos(data))
		} catch (e) {
			dispatch(failRepos(e))
		}
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
