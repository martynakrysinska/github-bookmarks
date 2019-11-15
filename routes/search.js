const express = require("express")
const searchRouter = express.Router()

searchRouter.get("/", (req, res) => {
	res.send(`search repositories`)
})

module.exports = { searchRouter }
