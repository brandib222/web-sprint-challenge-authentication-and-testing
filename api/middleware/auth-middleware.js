
// ********* PUT THESE IN THE MIDDLEWARE *************

// 3- On FAILED registration due to `username` or `password` missing from the request body,
// the response body should include a string exactly as follows: "username and password required".

// 4- On FAILED registration due to the `username` being taken,
// the response body should include a string exactly as follows: "username taken".

const missing = (req, res, next) => {
    const { username, password } = req.body
        if(!username || !password) {
            return res.json({status: 401, message: 'username and password required'})
        }
        next()
}

module.exports = {
    missing
}