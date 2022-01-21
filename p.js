var log = [];
console.log = function() {
    log.push([].slice.call(arguments));
};

process.openStdin().addListener('data', async input => {
  console.log(input)
  console.log(log)
})

// const c = require('./tools/colors.js')

// console.log(c('coucou', null, '#123446'))

/* const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });

client.on('ready', async () => {
  let guilds = Array.from(client.guilds.cache.values())
  let channels = []
  guilds.forEach(guild => {
    channels.push(guild.channels)
  })
  let textChannels = []
  let messages = []

  // console.log(channels)
  /* Array.from(guild.channels.cache.values()).forEach(ch => {
      if (ch.constructor.name == 'TextChannel') {textChannels.push([ch.guild.name, ch.name, ch.messages])}
      console.table(Object.values(textChannels))
      textChannels.forEach(channel => {
        let messages = channel.messages.fetch()
        Array.from(messages.values()).forEach(msg => {
          console.log()
        })
      })
    })
  guilds.forEach(guild => {
    Array.from(guild.channels.cache.values()).forEach(channel => {
      if (channel.constructor.name == 'TextChannel') {textChannels.push(channel)}
    })
  }) */
    
  /*
  let guilds = Array.from(client.guilds.cache.values())
  let textChannels = [];
  guilds.forEach(guild => {
    console.log(`\n\n ### ${guild.name} ###\n\n`)
    Array.from(guild.channels.cache.values()).forEach(ch => {
      if (ch.constructor.name == 'TextChannel') {textChannels.push(ch)}
        textChannels.forEach(channel => {console.log(`${channel.name} : ${Array.from(channel.messages.cache.values())}`)})
      })
    console.log(`\n\nTextChannels : \n\n${textChannels}`);
  });
  //*/

  /*
  console.log(messages[0].channel.guild.roles.cache) 
  //*/
  
  /*
  Array.from(client.guilds.cache.values()).forEach(guild => {
    Array.from(guild.cache.values()).forEach(channel => {
      Array.from(channel.messages.fetch().values()).reverse().forEach(i => {
        console.log(`#${i.guild.name}\n${i.author.username}${i.author.bot ? ' [bot]' : ''} : \n${i.content}\n`)
      })
    })
  })
  //*/
// })

  /*
  message.channel.messages.fetch().then(async messages => {
    console.log(`${messages.size} procuradas.`);

    let finalArray = [];

    const putInArray = async (data) => finalArray.push(data);
    const handleTime = (timestamp) => new Date.create(timestamp).format("DD/MM/YYYY - hh:mm:ss a").replace("pm", "PM").replace("am", "AM"); 
    for (const message of messages.array().reverse()) await putInArray(
      `${handleTime(message.createdTimestamp)} ${message.author.username} : ${message.content}`
    ); 

    console.log(finalArray);
    console.log(finalArray.length);
  }); 
  //*/ 