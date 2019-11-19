const express = require("express")
const bookmarksRouter = express.Router({ strict: true })
const sendJson = require("../middleware/sendJson")
const sendError = require("../middleware/sendError")

// Controllers:
const {
	getAllBookmarks,
	addBookmark,
	deleteBookmark,
	noMatch
} = require("../controllers/bookmarks")

// Routes:
const routes = {
	getAllBookmarks: "/",
	addBookmark: "/:id",
	deleteBookmark: "/:id",
	noMatch: "*"
}

bookmarksRouter.get(routes.getAllBookmarks, getAllBookmarks)

bookmarksRouter.post(routes.addBookmark, addBookmark)

bookmarksRouter.delete(routes.deleteBookmark, deleteBookmark)

bookmarksRouter.all(routes.noMatch, noMatch)

// middleware that sends the response:
bookmarksRouter.use(sendJson)

// middleware that sends the error
bookmarksRouter.use(sendError)

module.exports = { bookmarksRouter }
