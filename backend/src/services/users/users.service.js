// Initializes the `users` service on path `/users`
const createService = require('feathers-mongoose');
const createModel = require('../../models/users.model');
const hooks = require('./users.hooks');
const filters = require('./users.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'users',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/users', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users');

  service.hooks(hooks);

  // Create a user that we can use to log in
  var User = {
    email: 'admin@feathersjs.com',
    permissions: ['*']
  };
  service.create(User).then(user => {
    console.log('Created default user', user);
  }).catch(console.error);

  if (service.filter) {
    service.filter(filters);
  }
};
