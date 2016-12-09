/**
        Checks if input is a natural language date
            Problem: Mutually exclusive for checking 1 digit or 2 digit month days
                -Solved by downloading previous version
            
            Problem: Returns false when passing a date with a comma
                -Investigate strict parsing
                    +According to docs, this test should pass
                        -Perhaps version problem
                        -Problem not solved here. Assuming documentation is right, what's the problem?
                            +Either docs wrong, not have right version, or the test is incorrect
                            +When format has no comma, nld causes failing test
                            +Since last test fails when format has no comma, then it is incorrect
**/


module.exports = (input) => {
    var moment = require('moment')
    //Convert input to moment object
    var date = moment(input, "MMMM DD, YYYY", true)
    
    //Check if input is valid natural language date
    if (date.isValid()) {
        return true
    }
    else {return false}
}