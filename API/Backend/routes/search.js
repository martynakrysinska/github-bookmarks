const express = require("express")
const searchRouter = express.Router()
const sendJson = require("../middleware/sendJson")
const sendError = require("../middleware/sendError")
// In this case there's only one route and one controller for searching through github repositories,
// but with this structure it's easy to scale up and add more features that Github's API provides

const { searchByKeyword } = require("../controllers/search")

searchRouter.get("/", searchByKeyword)

// middleware
searchRouter.use(sendJson)
searchRouter.use(sendError)
module.exports = { searchRouter }
