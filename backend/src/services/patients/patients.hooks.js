const { authenticate } = require('feathers-authentication').hooks;

const updatePatients = () => {
  return hook => {
    console.log(' ')
    console.log('updatePatients..', hook.params)
    console.log('hook.data:', hook.data)
    const app = hook.app;
    return hook;
  }
}

const createPatients = () => {
  return hook => {
    console.log(' ')
    console.log('createPatients..', hook.params)
    console.log('hook.data:', hook.data)
    const app = hook.app;
    return hook;
  }
}

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [createPatients()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
