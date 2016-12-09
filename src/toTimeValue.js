/**
        Converts a natural language date to a time value
**/

module.exports = (input) => {
    //Make date object
    var date = new Date(input)
    
    //Return time value of date object
    var impreciseTimeValue = date.valueOf().toString()
    var preciseTimeValue = parseInt(impreciseTimeValue.substring(0,10))
    return preciseTimeValue
}