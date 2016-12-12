/**
        Converts Unix timestamp to natural language date and vice versa, then
        returns a JSON string containing the converted data
**/

module.exports = (input) => {
    var toTimeStamp = require('./toTimeStamp.js')
    var toNatLangDate = require('./toNatLangDate.js')
    var isTimeStamp = require('./isTimeStamp.js')
    var isNatLangDate = require('./isNatLangDate.js')

    if (isTimeStamp(input)) {
        return JSON.stringify({
            'unix': input,
            'natural': toNatLangDate(input) 
        })        
    }
    else if (isNatLangDate(input)) {
        return JSON.stringify({
            'unix': toTimeStamp(input),
            'natural': input
        })
    }
    else {
        return JSON.stringify({
            'unix': null,
            'natural': null
        })   
    }
}