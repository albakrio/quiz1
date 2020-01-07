const knex = require('./client')


module.exports = {

  //get all records
  getAll() {
    return knex('posts').select('*')
  },

  createPost(post) {
    return knex('posts').insert(post, '*')
  }

}