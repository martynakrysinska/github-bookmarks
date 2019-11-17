const axios = require("axios")

module.exports = {
	searchByKeyword: async (req, res, next) => {
		const { q } = req.query
		const url = `https://api.github.com/search/repositories?q=${q}`

		try {
			const { data } = await axios.get(url)
			res.locals.response = Object.assign({}, res.locals.response || {}, {
				count: data.total_count,
				items: data.items
			})
		} catch (e) {
			next(e)
		}
		next()
	}
}
