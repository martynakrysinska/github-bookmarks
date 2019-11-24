const sendError = (error, req, res, next) => {
	if (!error.statusCode) error.statusCode = 500

	res.status(error.statusCode).json({
		error: error.message || "Sorry, something went wrong"
	})

	res.set("Connection", "close")
	next(error)
}

module.exports = sendError
