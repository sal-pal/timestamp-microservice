/**
        Checks if input is a natural language date
**/

module.exports = (input) => {
    var moment = require('moment')
    var date = moment(input)
    if (date.isValid()) {
        var natLangDate = date.format("MMMM D, YYYY")
        if (natLangDate === input) {
            return true
        }
        else {return false}
    }
    else {return false}
}