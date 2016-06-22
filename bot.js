const Bot = require('pb-node');

const bot = new Bot({
  app_id: process.env."1409612761147",
  user_key: process.env."df02842140df124c272ce6909134f7de",
  botname: process.env."chip",
  url: process.env."https://aiaas.pandorabots.com/"
});

module.exports = bot;
