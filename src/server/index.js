const express = require('express');
const session = require('express-session');
const secrets = require('./../secrets.json')

const routes = require(`${__dirname}/routes`);

module.exports = function createAPI () {
  return new Promise(resolve => {
    const app = express();

    app.use(session({
      secret: secrets.WEB_SECRET,
      saveUninitialized: true,
      resave: false
    }));

    for (const route of Object.values(routes)) {
      route.call(this, app);
    }

    app.listen(secrets.WEB_PORT, () => {
      console.log(`Express server listening to ${secrets.WEB_PORT}.`);
      resolve();
    });
  });
};

module.exports();