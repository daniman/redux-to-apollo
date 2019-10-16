const keys = require('./src/keys');

module.exports = {
  client: {
    service: {
      name: 'github',
      url: 'https://api.github.com/graphql',
      headers: {
        Authorization: `bearer ${keys.github}`
      },
      skipSSLValidation: true
    }
  }
};
