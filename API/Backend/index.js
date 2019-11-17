const express = require("express")
const logger = require("morgan")

// Routers:
const { bookmarksRouter } = require("./routes/bookmarks")
const { searchRouter } = require("./routes/search")

const app = express()
app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/bookmarks", bookmarksRouter)
app.use("/search", searchRouter)

module.exports = app