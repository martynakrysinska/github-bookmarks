import React from "react"
import BookmarksList from "./BookmarksList"
import { GoStar, GoRepoForked } from "react-icons/go"
import "../../styles/Bookmarks.scss"

export const headline = {
	owner: {
		login: "AUTHOR"
	},
	name: "REPOSITORY",
	language: "LANGUAGE",
	stargazers_count: <GoStar />,
	forks_count: <GoRepoForked />
}

export default BookmarksList
