var chai = require('chai')
var expect = chai.expect
var isTimeValue = require('../../src/toTimeStamp.js')



describe('toTimeStamp', () => {
    it('returns correct time stamp when passed the NLD of "December 9, 2016"', () => {
        expect(isTimeValue("December 9, 2016")).to.equal(1481259600)
    })
    it('returns correct time stamp when passed the NLD of "December 9, 2015"', () => {
        expect(isTimeValue("December 9, 2015")).to.equal(1449637200)
    })
    it('returns correct time stamp when passed the NLD of "December 9, 2014"', () => {
        expect(isTimeValue("December 9, 2014")).to.equal(1418101200)
    })
    it('returns correct time stamp when passed the NLD of the Unix Epoch', () => {
        expect(isTimeValue("January 1, 1970")).to.equal(18000)
    })
})