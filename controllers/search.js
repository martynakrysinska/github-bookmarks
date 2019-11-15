const axios = require("axios")

module.exports = {
	searchByKeyword: async (req, res) => {
		const { q } = req.query
		const url = `https://api.github.com/search/repositories?q=${q}`

		try {
			const { data } = await axios.get(url)
			res.send({ items: data.items })
		} catch (e) {
			throw new Error(e)
		}
		res.end()
	}
}
