var timestampMicroServ = require('./src/integration.js')
var express = require("express")

var app = express()

app.get("/:input", (req, res) => {
    //Access origin header from request
    const headerVal = req.headers.origin
    
    //Assign headerVal to Access-Control-Allow-Origin response header
    res.set('Access-Control-Allow-Origin', headerVal)
    
    //Send response data
    var convertedData = timestampMicroServ(req.params.input)
    res.end(convertedData)
})

//Find out what port will be listened on
app.listen(process.env.PORT)