const User = require('../models/user.model')

module.exports = {
  create(req, res) {
    User
      .create(req.body)
      .then(user => res.json(user))
      .catch(err => res.json(err))
  },

  list(req, res) {
    User
      .find()
      .then(users => res.json(users))
      .catch(err => res.json(err))
  }
}
