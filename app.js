const express = require("express")
const app = express()
const port = 3000

// Register public folder and send it to the client
app.use(express.static(__dirname + "/public"))

// Create routes

app.get("/", (req, res) => {
	console.log("This is the homepage")
	// res.send("<h1>This is the homepage</h1>")

	console.log(__dirname)
	res.sendFile(__dirname + "/views/home.html")
})

app.get("/about", (req, res) => {
	res.sendFile(__dirname + "/views/about.html")
})

// Challenge: Create a cat page
// The cat page shows the cat image
app.get("/work", (req, res) => {
	res.sendFile(__dirname + "/views/work.html")
})

// We can use node or nodemon to start the server:
// https://www.npmjs.com/package/nodemon

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
