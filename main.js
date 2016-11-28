var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    
    res.setHeader("contenttype", "text/plain")
    res.send(req.method.toUpperCase() + " " + req.url + " HTTP" + req.httpVersion)
})

app.listen(9092)