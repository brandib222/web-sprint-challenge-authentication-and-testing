const Users = require('../users/users-model')


// ********* PUT THESE IN THE MIDDLEWARE *************

// 3- On FAILED registration due to `username` or `password` missing from the request body,
// the response body should include a string exactly as follows: "username and password required".

// 4- On FAILED registration due to the `username` being taken,
// the response body should include a string exactly as follows: "username taken".


// MESSAGE IS WORKING BUT STATUS CODE ISN'T????
const missing = (req, res, next) => {
    const { username, password } = req.body
        if(!username || !password) {
            return res.json({status: 500, message: 'username and password required'})
        }
        next()
}

// THIS IS NOT WORKING
const taken = async (req, res, next) => {
    if(Users.findBy(req.user.username).first() != null){
        next({ status: 400, message: 'username taken'  })
    } else {
        next()
    }
}

module.exports = {
    missing,
    taken,
}