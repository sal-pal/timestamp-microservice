var timestampMicroServ = require('./src/integration.js')
var express = require("express")

var app = express()

app.get("/:input", (req, res) => {
    var convertedData = timestampMicroServ(req.params.input)
    res.end(convertedData)
})

//Find out what port will be listened on
app.listen(80)