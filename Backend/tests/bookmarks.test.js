const request = require("supertest")
const { BookmarkStore } = require("../Store/Store")
const { repo } = require("./testdata")
const app = require("../index.js")

let id = "102702"

beforeAll(() => {
	BookmarkStore.addBookmark(repo[1].id)
})

describe("GET /bookmarks", () => {
	test("Should respond with status code 200", async done => {
		const response = await request(app).get("/bookmarks")

		expect(response.statusCode).toBe(200)

		done()
	})
	test("Should contain bookmarks in response", async done => {
		const response = await request(app).get("/bookmarks")

		expect(response.body.data).toHaveProperty("bookmarks")
		expect(response.body.data.bookmarks.length).toBe(1)

		done()
	})
})

describe("POST /bookmarks/:id", () => {
	test("Should respond with status code 200", async done => {
		const response = await request(app).post(`/bookmarks/${id}`)

		expect(response.statusCode).toBe(200)
		done()
	})
	test("Should contain bookmarks and message in response", async done => {
		const response = await request(app).post(`/bookmarks/${id}`)

		expect(response.body.data).toHaveProperty("message")
		expect(response.body.data).toHaveProperty("bookmarks")
		expect(response.body.data.bookmarks[1][1].id).toBe(Number(id))
		expect(response.body.data.bookmarks[1][1]).toHaveProperty("owner")
		done()
	})
	test("Should increment bookmarks by 1", async done => {
		const response = await request(app).post(`/bookmarks/${id}`)
		expect(response.body.data.bookmarks.length).toBe(2)
		expect(BookmarkStore.bookmarks.size).toBe(2)
		done()
	})
})

describe("DELETE /bookmarks/:id", () => {
	test("Should respond with status code 200, message and updated bookmarks", async done => {
		const response = await request(app).delete(`/bookmarks/${id}`)
		expect(response.statusCode).toBe(200)
		expect(response.body.data).toHaveProperty("message")
		expect(response.body.data).toHaveProperty("bookmarks")
		expect(response.body.data.bookmarks.length).toBe(1)
		done()
	})

	test("Should decrement bookmarks by 1", async done => {
		expect(BookmarkStore.bookmarks.size).toBe(1)
		done()
	})
})
