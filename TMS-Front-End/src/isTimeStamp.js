/**
        Check if input is Unix timestamp
**/

module.exports = (input) => {
    var value = parseInt(input)
    if (isNaN(value)) {
        return false
    }
    else if (typeof value === 'number') {
        return true
    }
    else {return false}
}