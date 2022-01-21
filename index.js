const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 3000;

const date = require('./tools/date.js');
const c = require('./tools/colors.js');

const entrePotes = {
  id: '901541669726474340',
  Général: { id: '901541669726474343' }
}
const Dev = {
  id: '898885394714734613',
  Général: { id: '898885395293564991' }
}
activeGl = Dev.id
activeCh = Dev.Général.id

const cInput = () => {
  
}

client.on('ready', async () => {
  let guild = client.guilds.cache.get(activeGl);
  let channel = guild.channels.cache.get(activeCh);
  let messages = await channel.messages.fetch(); messages = Array.from(messages.values());
  let conv = [];
  messages.reverse().forEach(i => {
    if (!i.member) { return }
    let name = `@${i.member ? i.member.displayName : i.author.name}${i.author.bot ? ' [bot]' : ''}`;
    // TODO: Virer les pseudo et le timestamp si deux messages d'affilée
    let html = `
      <h5><span style="color: ${i.member.displayHexColor}">${name}</span> [${date(i.createdTimestamp)}]</h4>
      <p>${i.content}</p>`;
    let message = `${i.guild.name}/#${i.channel.name} - ${c(`<${name}>`, i.member.displayHexColor)} [${date(i.createdTimestamp)}]\n${i.content}\n`;
    console.log(message);
    conv.push(html);
  });
  conv.reverse();
  router.get('/', (req, res) => {
    res.render('pages/index', {
      guild: guild.name,
      channel: channel.name,
      messages: conv
    });
  });
  router.get('/about', (req, res) => {
    res.render('pages/about')
  });
  app.use(express.static(__dirname + '/public'));
  app.set('view engine', 'ejs');
  app.use('/', router);
  app.listen(port || 3000);
  // ╭╮╰╯─│┌┐└┘─│┏┓┗┛━┃

  process.openStdin().addListener('data', async input => {
    await client.guilds.cache.get(activeGl).channels.cache.get(activeCh).send(input.toString().trim());
    let rows = '─'.repeat(50)
    let spaces = ' '.repeat(50)
    let box = '┌' + rows + '┐' + '\n│' + spaces + '│\n' + '└' + rows + '┘'
    process.stdout.write(box)
    process.stdout.moveCursor(-50, -1)
  });

  let rows = '─'.repeat(50)
  let spaces = ' '.repeat(50)
  let box = '┌' + rows + '┐' + '\n│' + spaces + '│\n' + '└' + rows + '┘'
  process.stdout.write(box)
  process.stdout.moveCursor(-50, -1)

  process.stdout.on('resize', function() {
    let rows = '─'.repeat(process.stdout.rows - 2)
    let box = '┌' + rows + '┐'
    process.stdout.write(box)
  })
});

client.on('message', async i => {
  process.stdout.moveCursor(0, 0)
  process.stdout.clearLine();
  process.stdout.moveCursor(0, -1)
  process.stdout.clearLine();
  process.stdout.moveCursor(0, -1)
  process.stdout.clearLine();
  if (!i.member) { return }
  let name = `@${i.member ? i.member.displayName : i.author.name}${i.author.bot ? ' [bot]' : ''}`;
  let message = `${i.guild.name}/#${i.channel.name} - ${c(`<${name}>`, i.member.displayHexColor)} [${date(i.createdTimestamp)}]\n${i.content}\n`;
  console.log(message);
});

client.login(process.env['TOKEN']); 