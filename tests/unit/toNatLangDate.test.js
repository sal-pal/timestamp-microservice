var chai = require('chai')
var expect = chai.expect
var isTimeValue = require('../../src/toNatLangDate.js')



describe('toNatLangDate', () => {
    it("returns correct NLD when passed a positive number as a timestamp", () => {
        expect(isNatLangDate('18000')).to.equal("January 1, 1970")
    })     
    it("returns correct NLD when passed a negative number as a timestamp", () => {
        expect(isNatLangDate('-1')).to.equal('December 31, 1969')
    }) 
    it("returns 'Invalid date' when passed a random string", () => {
        expect(isNatLangDate('Random String')).to.equal('Invalid date')
    })
    it("returns 'Invalid date' when passed a number too large or too small", () => {
        expect(isNatLangDate("-300000000000000")).to.equal('Invalid date')
    })   
})