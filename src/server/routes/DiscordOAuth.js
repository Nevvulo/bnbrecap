const DiscordOauth2 = require('discord-oauth2');
const oauth = new DiscordOauth2();
const secrets = require('./../../secrets.json');

module.exports = async function discordCallbackRoute (app) {
  app.get('/api/oauth', async (req, res) => {
    if (!req.query.code) {
      return res.status(400).send('`code` was required but not supplied in querystring')
    }
    oauth.tokenRequest({
        clientId: secrets.CLIENT_ID,
        clientSecret: secrets.CLIENT_SECRET,
        code: req.query.code,
        scope: secrets.SCOPE,
        grantType: 'authorization_code',
        redirectUri: secrets.REDIRECT_URI
    })
    .then((data) => {
      res.redirect(301, `${secrets.BASE_URI_APP}?access_token=${data.access_token}`)
    })
    .catch((e) => res.status(500).send(e.message))
  });
}

