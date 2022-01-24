import { Client } from "discord.js";
const client = new Client();
require("dotenv").config();

client.on('ready', async () => {
  console.log(`Logged as ${client.user?.username}`)
})

client.login(process.env.TOKEN);