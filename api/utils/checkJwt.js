const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

module.exports = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://tdi-filipa.eu.auth0.com/.well-known/jwks.json`
  }),
  audience: 'https://tdi-filipa.eu.auth0.com/api/v2/',
  issuer: `https://tdi-filipa.eu.auth0.com/`,
  algorithms: ["RS256"]
});