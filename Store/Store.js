class Store {
	constructor() {
		this.bookmarks = new Map()
	}

	addBookmark(bookmarkObj) {
		this.bookmarks.set(bookmarkObj.id, bookmarkObj)
	}

	deleteBookmark(id) {
		this.bookmarks.delete(Number(id))
	}
}

const BookmarkStore = new Store()
module.exports = BookmarkStore
