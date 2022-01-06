/* jshint esversion: 6 */

const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

const date = require('./tools/date.js');
const c = require('./tools/colors.js');

client.on('ready', async () => {
  console.log('Ready!');
  // let messages = await client.guilds.cache.get('901541669726474340').channels.cache.get('901541669726474343').messages.fetch()
  let messages = await client.guilds.cache.get('898885394714734613').channels.cache.get('898885395293564991').messages.fetch();
  messages = Array.from(messages.values());
  messages.reverse().forEach(i => {
    if (i.member) {
      let name = `<@${i.member?i.member.displayName:i.author.name}${i.author.bot?' [bot]':''}>`;
      let message = `${i.guild.name}/#${i.channel.name} - ${c(name, i.member.displayHexColor)} [${date(i.createdTimestamp)}]\n${i.content}\n`;
      console.log(message);
    } else {
      let message = `${i.guild.name}/#${i.channel.name} - <@${i.author.name}${i.author.bot?' [bot]':''}> [${date(i.createdTimestamp)}]\n${i.content}\n`;
      console.log(message);
    }
  });
  /*
  // const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
  await client.guilds.cache.get('901541669726474340').channels.cache.get('901541669726474343').send('test');
  //*/
});

client.on('message', i => {
  let name = `<@${i.member?i.member.displayName:i.author.name}${i.author.bot?' [bot]':''}>`;
  let message = `${i.guild.name}/#${i.channel.name} - ${c(name, i.member.displayHexColor)} [${date(i.createdTimestamp)}]\n${i.content}\n`;
  console.log(message);
});

client.login(process.env.TOKEN); 