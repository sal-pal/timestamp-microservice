var chai = require('chai')
var expect = chai.expect
var timestampMicroServ = require('../src/integration.js')


describe('timestampMicroServ returns JSON string containing', () => {
    
    it('correct Unix timestamp along with input "May 21, 1992"', () => {
        var correctOutput = JSON.stringify({'unix': 706406400, 'natural': "May 21, 1992"})
        expect(timestampMicroServ("May 21, 1992")).to.equal(correctOutput)
    })
    it('correct Unix timestamp along with input "October 28, 2099"', () => {
        var correctOutput = JSON.stringify({'unix': 4096828800, 'natural': "October 28, 2099"})
        expect(timestampMicroServ("October 28, 2099")).to.equal(correctOutput)
    })
    it('correct NLD along with input of 706406400', () => {
        var correctOutput = JSON.stringify({'unix': 706406400, 'natural': "May 21, 1992"})
        expect(timestampMicroServ("706406400")).to.equal(correctOutput)
    })
    it('correct NLD along with input of 4096828800', () => {
        var correctOutput = JSON.stringify({'unix': 4096828800, 'natural': "October 28, 2099"})
        expect(timestampMicroServ("4096828800")).to.equal(correctOutput)
    })
    it('all properties assigned null when passed a messed up date', () => {
        var correctOutput = JSON.stringify({'unix': null, 'natural': null})
        expect(timestampMicroServ("Oct 21, 1985")).to.equal(correctOutput)
    })
    it('all properties assigned null when passed a random string', () => {
        var correctOutput = JSON.stringify({'unix': null, 'natural': null})
        expect(timestampMicroServ("asdfasdfs")).to.equal(correctOutput)
    })
    
})