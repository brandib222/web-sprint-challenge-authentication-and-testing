const db = require('../../data/dbConfig')

function getAll() {
    return db('users')
}

function getById(id) {
    return db('users').where('id', id).first()
}

function findBy(filter) {
    return db('users').where(filter)
  }

async function add (user) {
    const [id] = await db('users').insert(user)
    return getById(id)
}

module.exports = {
    getAll, 
    getById, 
    findBy,
    add
}