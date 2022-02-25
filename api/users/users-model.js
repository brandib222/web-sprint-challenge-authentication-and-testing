const db = require('../../data/dbConfig')

function getById(id) {
    return db('users').where('id', id).first()
}

async function add (user) {
    const [id] = await db('users').insert(user)
    return getById(id)
}

module.exports = {
    getById, 
    add
}