var chai = require('chai')
var expect = chai.expect
var isNatLangDate = require("../../src/isNatLangDate.js")

describe("isNatLangDate", () => {
    it("returns true when passed a natural language date with the day of month having 1 digit", () => {
        expect(isNatLangDate("December 8, 2016")).to.equal(true)
    })
    it("returns true when passed a natural language date with the day of month having 2 digits", () => {
        expect(isNatLangDate("December 8, 2016")).to.equal(true)
    })
    it("returns false when passed a date with 'th' at end of day of month", () => {
        expect(isNatLangDate("December 8th, 2016")).to.equal(false)
    })
    it("returns false when name of the month is incomplete", () => {
        expect(isNatLangDate("Dec 8, 2016")).to.equal(false)
    })     
    it("returns false when passed a time value", () => {
        expect(isNatLangDate(1481163870249)).to.equal(false)
    })
    it("returns false when passed a random string", () => {
        expect(isNatLangDate('Random String')).to.equal(false)
    }) 
})