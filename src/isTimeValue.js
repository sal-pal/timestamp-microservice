/**
        Check if input is time value
            -If input is not number, then not timestamp
**/

module.exports = (input) => {
    input = parseInt(input)
    
    //Convert input to date object
    var date = new Date(input)
    
    //Compare input with time value of date object
    if (input === date.valueOf()) {
        return true
    }
    else {
        return false
    }
}