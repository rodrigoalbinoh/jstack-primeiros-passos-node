const UsersController = require('./controllers/userController');

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UsersController.listUsers
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: UsersController.getUserById
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: UsersController.createUser
  },
]