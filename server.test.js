/**
        Server has only one route
            -Will pass request data to timestamp-microservice
            -Want api to write JSON to res
        -Server has only one test:
            +Checking that res has correct object written to resp
        -Research how to test that:
        
        -How to test that our server works.
            +Will export our app object to test it
**/

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