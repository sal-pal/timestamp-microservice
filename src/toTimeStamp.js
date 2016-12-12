/**
        Converts a natural language date to a time stamp
**/

module.exports = (input) => {
    var moment = require('moment')
    var isNatLangDate = require('./isNatLangDate.js')
    if (isNatLangDate(input) === true) {
        var momentObj = moment(input)
        return momentObj.unix().toString()
    }
    else {return 'Not an NLD'}
}