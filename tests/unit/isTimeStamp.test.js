var chai = require('chai')
var expect = chai.expect
var isTimeValue = require('../../src/isTimeStamp.js')



describe('isTimeStamp', () => {
    it('returns true when passed time stamp', () => {
        expect(isTimeValue("1481163870249")).to.equal(true)
    })
    it('returns false when passed natural language date', () => {
        expect(isTimeValue('December 7, 2016')).to.equal(false)
    })
    it('returns false when passed random string', () => {
        expect(isTimeValue('Random String')).to.equal(false)
    })
    it('returns false when passed boolean', () => {
        expect(isTimeValue(true)).to.equal(false)
    })
})