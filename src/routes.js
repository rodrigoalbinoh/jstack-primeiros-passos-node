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
  {
    endpoint: '/users/:id',
    method: 'PUT',
    handler: UsersController.updateUser
  },
  {
    endpoint: '/users/:id',
    method: 'DELETE',
    handler: UsersController.deleteUser
  },
]