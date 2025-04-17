const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("home page")
})

app.get("/about", (req, res) => {
    res.send("about page")
})

app.get("/service", (req, res) => {
    res.send("service page")
})

app.listen(8000, () => {
    console.log("server is running")
})
