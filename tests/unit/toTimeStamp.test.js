var chai = require('chai')
var expect = chai.expect
var toTimeStamp = require('../../src/toTimeStamp.js')



describe('toTimeStamp', () => {
    it('returns correct time stamp when passed the NLD of "December 9, 2016"', () => {
        expect(toTimeStamp("December 9, 2016")).to.equal(1481259600)
    })
    it('returns correct time stamp when passed the NLD of "December 9, 2015"', () => {
        expect(toTimeStamp("December 9, 2015")).to.equal(1449637200)
    })
    it('returns "Not an NLD" when passed a date with no comma after day of month', () => {
        expect(toTimeStamp("December 9 2015")).to.equal("Not an NLD")
    })    
    it('returns "Not an NLD" when passed a timestamp', () => {
        expect(toTimeStamp("1418101200")).to.equal("Not an NLD")
    })
    it('returns "Not an NLD" when passed a random string', () => {
        expect(toTimeStamp('Random String')).to.equal("Not an NLD")
    })
})