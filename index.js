const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("dashboard")
})

app.get("/about", (req, res) => {
    res.send("about page")
})

app.get("/home", (req, res) => {
    res.send("home page")
})

app.listen(8000, () => {
    console.log("server is running")
})
