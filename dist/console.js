/* jshint esversion: 6 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Client, Intents, WebhookClient } from "discord.js";
const client = new Client({ ws: { intents: new Intents(Intents.ALL) } });
import { color, date, drawBox, clearBox, refreshBox } from "./tools/shortcuts.js";
import data from "./tools/data.js";
let name;
let defGl = 0;
let defCh = 0;
let activeGl = data[defGl].id;
let activeCh = data[defGl].channels[defCh].id;
let webhookClient = new WebhookClient(data[defGl].channels[defCh].webhookID, data[defGl].channels[defCh].webhookToken);
client.on("ready", () => __awaiter(void 0, void 0, void 0, function* () {
    let guild = client.guilds.cache.get(activeGl);
    let channel = guild.channels.cache.get(activeCh);
    let messages = yield channel.messages.fetch();
    messages = Array.from(messages.values());
    const webhooks = yield channel.fetchWebhooks();
    let webhook = webhooks.find((wh) => wh.token);
    name = webhook.name;
    const tmp = yield client.guilds.cache
        .get("898885394714734613")
        .channels.cache.get("898885395293564991")
        .fetchWebhooks();
    const logWebhook = tmp.find((wh) => wh.token);
    yield logWebhook.send({
        content: "Application started at " + date(Date.now()),
        username: "Logger",
        avatarURL: "https://cdn-icons-png.flaticon.com/128/2306/2306000.png",
        // embeds: [embed],
    });
    messages.reverse().forEach((i) => {
        if (i.webhookID) {
            let message = `${i.guild.name}/#${i.channel.name} - <@${i.author.username} [webhook]> [${date(i.createdTimestamp)}]\n${i.content}\n`;
            console.log(message);
        }
        else if (i.author.bot) {
            let message = `${i.guild.name}/#${i.channel.name} - ${color(`<@${i.author.username} [bot]>`, i.member.displayHexColor)} [${date(i.createdTimestamp)}]\n${i.content}\n`;
            console.log(message);
        }
        else {
            let message = `${i.guild.name}/#${i.channel.name} - ${color(`<@${i.member.displayName}>`, i.member.displayHexColor)} [${date(i.createdTimestamp)}]\n${i.content}\n`;
            console.log(message);
        }
    });
    drawBox(name);
    process.openStdin().addListener("data", (input) => __awaiter(void 0, void 0, void 0, function* () {
        let content = input.toString().trim();
        if (content === "") {
            clearBox();
            drawBox(name);
            return;
        }
        if (content.startsWith("§")) {
            let cmd = content.substring(1).split(/\s+/)[0].trim();
            let args = content.substring(cmd.length + 2).trim();
            switch (cmd) {
                case "nick":
                    webhookClient.edit({ name: args });
                    refreshBox();
                    return;
                case "moveGl":
                    guild.channels.find((ch) => ch);
                    break;
                case "moveCh":
                    break;
            }
        }
        yield webhookClient.send(content);
    }));
    process.stdout.on("resize", () => {
        refreshBox();
    });
}));
client.on("message", (i) => __awaiter(void 0, void 0, void 0, function* () {
    const webhooks = yield i.channel.fetchWebhooks();
    let webhook = webhooks.find((wh) => wh.token);
    name = webhook.name;
    clearBox();
    if (i.webhookID) {
        let message = `${i.guild.name}/#${i.channel.name} - <@${i.author.username} [webhook]> [${date(i.createdTimestamp)}]\n${i.content}\n`;
        console.log(message);
    }
    else if (i.author.bot) {
        let message = `${i.guild.name}/#${i.channel.name} - ${color(`<@${i.author.username} [bot]>`, i.member.displayHexColor)} [${date(i.createdTimestamp)}]\n${i.content}\n`;
        console.log(message);
    }
    else {
        let message = `${i.guild.name}/#${i.channel.name} - ${color(`<@${i.member.displayName}>`, i.member.displayHexColor)} [${date(i.createdTimestamp)}]\n${i.content}\n`;
        console.log(message);
    }
    drawBox(name);
}));
// ╭╮╰╯─│┌┐└┘─│┏┓┗┛━┃
client.login("OTEwMjEzNDA2NTA4ODYzNDg4.YZPkSw.qbPByzbibF987feDGi1P05HzBi0");
