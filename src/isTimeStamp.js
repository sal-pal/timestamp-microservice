/**
        Check if input is Unix timestamp
**/

module.exports = (input) => {
    if (input === 'string') {
        input = parseInt(input)
        if (typeof input === 'number') {
            return true
        }
        else {
            return false
        }
    }
    if (typeof input === 'number') {
        return true
    }
    else {return false}
}