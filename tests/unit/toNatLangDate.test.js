var chai = require('chai')
var expect = chai.expect
var toNatLangDate = require('../../src/toNatLangDate.js')



describe('toNatLangDate', () => {
    it("returns correct NLD when passed a positive number as a timestamp", () => {
        expect(toNatLangDate('18000')).to.equal("January 1, 1970")
    })     
    it("returns correct NLD when passed a negative number as a timestamp", () => {
        expect(toNatLangDate('-1')).to.equal('December 31, 1969')
    }) 
    it("returns 'Invalid date' when passed a random string", () => {
        expect(toNatLangDate('Random String')).to.equal('Invalid date')
    })
    it("returns 'Invalid date' when passed a number too large or too small", () => {
        expect(toNatLangDate("-300000000000000")).to.equal('Invalid date')
    })   
})