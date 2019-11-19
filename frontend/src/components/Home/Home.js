import React from "react"
import Search from "../Search"
import ReposList from "../ReposList"
import "../../styles/Home.scss"
const Home = () => {
	return (
		<div className="home-container">
			<Search></Search>
			<ReposList></ReposList>
		</div>
	)
}

export default Home
