const express = require("express")
const logger = require("morgan")
const cors = require("cors")

// Routers:
const { bookmarksRouter } = require("./routes/bookmarks")
const { searchRouter } = require("./routes/search")

const app = express()

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use("/bookmarks", bookmarksRouter)
app.use("/search", searchRouter)

module.exports = app
