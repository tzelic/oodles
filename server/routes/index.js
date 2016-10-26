'use strict';

const Boom = require('boom');
const Glob = require('glob');
const Path = require('path');
const sessionAuth = require('../auth');

function requireAll(server) {
  const routesList = [];

  Glob.sync('./server/routes/!(index.js)').forEach(file => {
    let routes = require(Path.resolve(file));
    for (let route of routes) {
      routesList.push(route);
    }
  });

  for(let route of routesList) {
    route.config.handler = errorHandler(route.config.handler);
    server.route(route);
  }
}

function errorHandler(defaultHandler) {
  return function(request, reply) {
    Promise.resolve(defaultHandler(request, reply))
      .catch(err => {
        console.log('err' + err);
        reply(Boom.wrap(err)).continue();
      });
  };
}

let routes = {
  register: (server, options, next) => {
    server.register(sessionAuth, err => {
      if (err) throw err;

      requireAll(server);
    });
    next();
  }
};

routes.register.attributes = {
  name: 'routes'
};

module.exports = routes;
