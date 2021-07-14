const UsersController = require('./controllers/userController');

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UsersController.listUsers
  },
]