const express = require("express")
const bookmarksRouter = express.Router()

// :id stands for repository id, not bookmark id!
// to keep things simple bookmarks don't have their own ids

const routes = {
	getAllBookmarks: "/",
	addBookmark: "/:id",
	deleteBookmark: "/:id"
}

bookmarksRouter.get(routes.getAllBookmarks, (req, res) => {
	res.send("get all bookmarks")
})

bookmarksRouter.post(routes.addBookmark, (req, res) => {
	const { id } = req.params
	res.send(`added a repo with id: ${id} to your bookmarks`)
})

bookmarksRouter.delete(routes.deleteBookmark, (req, res) => {
	const { id } = req.params
	res.send(`deleted a repository with id ${id} from your bookmarks`)
})

module.exports = { bookmarksRouter }
