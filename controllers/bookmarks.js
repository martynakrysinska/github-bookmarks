module.exports = {
	getAllBookmarks: async (req, res) => {
		res.send("get all bookmarks")
	},
	addBookmark: async (req, res) => {
		const { id } = req.params
		res.send(`added a repo with id: ${id} to your bookmarks`)
	},
	deleteBookmark: async (req, res) => {
		const { id } = req.params
		res.send(`deleted a repository with id ${id} from your bookmarks`)
	}
}
