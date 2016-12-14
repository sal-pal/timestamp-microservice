var request = require('supertest')
var express = require('express')
var timestampMicroServ = require('./src/integration.js')

var app = express()

app.get("/:input", (req, res) => {
    var convertedData = timestampMicroServ(req.params.input)
    res.end(convertedData)
})


describe("Our api is to return", () => {
    it("the correct output when passed a Unix timestamp", () => {
        request(app)
            .get("/4096828800")
            .expect(200, {unix: "4096828800", natural: "October 27, 2099"})
    })
    it("the correct output when passed a natural language date", () => {
        request(app)
            .get("/October%2027%2C%202099")
            .expect(200, {unix: "4096828800", natural: "October 27, 2099"})
    })
    it("the correct output when passed a random string", () => {
        request(app)
            .get("/RandomStringBlaaah")
            .expect(200, {unix: null, natural: null})
    })
})