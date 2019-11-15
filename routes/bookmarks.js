const express = require("express")
const bookmarksRouter = express.Router()

// :id stands for repository id, not bookmark id!
// to keep things simple bookmarks don't have their own ids

// Controllers:
const {
	getAllBookmarks,
	addBookmark,
	deleteBookmark
} = require("../controllers/bookmarks")

// Routes:
const routes = {
	getAllBookmarks: "/",
	addBookmark: "/:id",
	deleteBookmark: "/:id"
}

bookmarksRouter.get(routes.getAllBookmarks, getAllBookmarks)

bookmarksRouter.post(routes.addBookmark, addBookmark)

bookmarksRouter.delete(routes.deleteBookmark, deleteBookmark)

module.exports = { bookmarksRouter }
