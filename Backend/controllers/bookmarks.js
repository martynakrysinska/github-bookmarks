const BookmarkStore = require("../Store/Store")
const axios = require("axios")

module.exports = {
	getAllBookmarks: (req, res, next) => {
		try {
			res.locals.response = Object.assign({}, res.locals.response || {}, {
				bookmarks: [...BookmarkStore.bookmarks]
			})
		} catch (e) {
			next(e)
		}
		next()
	},
	addBookmark: async (req, res, next) => {
		const { id } = req.params
		try {
			const resp = await axios.get(
				`https://api.github.com/repositories/${id}`
			)
			const { data } = resp

			BookmarkStore.addBookmark(data)
			res.locals.response = Object.assign({}, res.locals.response || {}, {
				message: `Successfully added a repository with id: ${id} to your bookmarks`
			})
		} catch (e) {
			if (e.message.includes("404")) e.statusCode = 404
			next(e)
		}
		next()
	},
	deleteBookmark: (req, res, next) => {
		const { id } = req.params
		try {
			BookmarkStore.deleteBookmark(id)
			res.locals.response = Object.assign({}, res.locals.response || {}, {
				message: `Successfully deleted a repository with id: ${id} to your bookmarks`
			})
		} catch (e) {
			next(e)
		}
		next()
	},
	noMatch: (req, res, next) => {
		if (res.locals.response) {
			next()
		} else {
			const error = new Error("No matching routes found")
			error.statusCode = 404
			next(error)
		}
	}
}
