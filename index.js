const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });

const express = require('express');
const es6Renderer = require('express-es6-template-engine')
const app = express();
const path = require('path');
const router = express.Router();
const port = 3000;

// const cons = require('consolidate');

const date = require('./tools/date.js');
const c = require('./tools/colors.js');

client.on('ready', async () => {
  console.log('Ready!');
  let guild = client.guilds.cache.get('901541669726474340');
  let channel = guild.channels.cache.get('901541669726474343');
  let messages = await channel.messages.fetch();
  messages = Array.from(messages.values());
  let conv = []; 
  messages.reverse().forEach(i => {
    let name = `@${i.member?i.member.displayName:i.author.name}${i.author.bot?' [bot]':''}`;
    // TODO: Virer les pseudo et le timestamp si deux messages d'affilée
    let html = `
      <h5><span style="color: ${i.member.displayHexColor}">${name}</span> [${date(i.createdTimestamp)}]</h4>
      <p>${i.content}</p>`;
    let message = `${i.guild.name}/#${i.channel.name} - ${c(`<${name}>`, i.member.displayHexColor)} [${date(i.createdTimestamp)}]\n${i.content}\n`;
    console.log(message);
    conv.push(html);
  });
  router.get('/', (req, res) => {
    res.render('pages/index', {
      guild: guild.name,
      channel: channel.name,
      messages: conv.reverse()
    })
  })
  router.get('/about', (req, res) => {
    res.render('pages/about')
  })

  // app.use(express.favicon(path.join(__dirname, 'icon.png')));
  // app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.use('/', router);
  app.listen(port || 3000 );
  /*
  // const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
  await client.guilds.cache.get('901541669726474340').channels.cache.get('901541669726474343').send('test');
  //*/
});

client.on('message', i => {
  let name = `@${i.member?i.member.displayName:i.author.name}${i.author.bot?' [bot]':''}`; 
  let message = `${i.guild.name}/#${i.channel.name} - ${c(`<${name}>`, i.member.displayHexColor)} [${date(i.createdTimestamp)}]\n${i.content}\n`;
  console.log(message);
});

client.login(process.env['TOKEN']); 