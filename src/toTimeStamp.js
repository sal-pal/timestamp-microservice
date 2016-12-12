/**
        Converts a natural language date to a time stamp
**/

module.exports = (input) => {
    var moment = require('moment')
    var momentObj = moment(input)
    return momentObj.unix()    
}