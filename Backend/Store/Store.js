class Store {
	constructor() {
		this.bookmarks = new Map()
	}

	addBookmark(bookmarkObj) {
		this.bookmarks.set(bookmarkObj.id, bookmarkObj)
	}

	deleteBookmark(id) {
		if (!this.bookmarks.has(Number(id))) {
			const error = new Error("Bookmark with given id doesn't exist")
			error.statusCode = 400
			throw error
		}
		this.bookmarks.delete(Number(id))
	}
}

const BookmarkStore = new Store()
module.exports = BookmarkStore
