const BookmarkStore = require("../Store/Store")
const axios = require("axios")

module.exports = {
	getAllBookmarks: (req, res) => {
		res.send({ bookmarks: [...BookmarkStore.bookmarks] })
	},
	addBookmark: async (req, res) => {
		const { id } = req.params
		try {
			const resp = await axios.get(
				`https://api.github.com/repositories/${id}`
			)
			BookmarkStore.addBookmark(resp.data)
			res.send(`added a repository with id: ${id} to your bookmarks`)
		} catch (e) {
			throw new Error(e)
		}
	},
	deleteBookmark: (req, res) => {
		const { id } = req.params
		BookmarkStore.deleteBookmark(id)

		res.send(`deleted a repository with id ${id} from your bookmarks`)
	}
}
