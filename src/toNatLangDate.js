/**
        Converts Unix timestamp to natural language date
**/

module.exports = (input) => {
    var moment = require('moment')
    var momentObj = moment(input * 1000)
    var natLangDate = momentObj.format("MMMM D, YYYY")
    return natLangDate 
}