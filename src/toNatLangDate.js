/**
        Converts Unix timestamp to natural language date
**/

module.exports = (input) => {
    var moment = require('moment')
    var isTimeStamp = require('./isTimeStamp.js')
    if (isTimeStamp(input)) {
        var momentObj = moment(input * 1000)
        var natLangDate = momentObj.format("MMMM D, YYYY")
        return natLangDate     
    }
    else {return 'Invalid date'}
}