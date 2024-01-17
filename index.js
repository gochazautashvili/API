const express = require("express")
const cors = require("cors")
require("dotenv").config()
const { readdirSync } = require('fs')

const app = express()
const PORT = process.env.PORT || 8000
app.use(cors())
app.use(express.json())

// readdirSync

readdirSync("./routes").map((file) => app.use('/', require("./routes/" + file)))

// all route 
app.get("/", (req, res) => {
    res.send("Hello World")
})

// server listen

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})