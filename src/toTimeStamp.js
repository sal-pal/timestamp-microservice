/**
        Converts a natural language date to a time stamp
**/

module.exports = (input) => {
    var moment = require('moment')
    var isNatLangDate = require('./isNatLangDate.js')
    if (isNatLangDate(input)) {
        var momentObj = moment(input)
        var timestamp = momentObj.unix().toString()
        return timestamp
    }
    else {return 'Not an NLD'}
}