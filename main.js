const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzYxODY3NDM3MTMzNjYwMTgw.X3g2Vw.28d2vYS-JnBqKG-O5VkoxXdyDCk'

client.login(token);

client.on('message', message => {
    msg = message.content.toLowerCase();

    if (msg === 'hello') {
        message.channel.send("Hey there! <@" + message.author.id + ">");
    }

    if (msg.includes("uwu")) {
        message.channel.send("stfu weeb");
    }

    if (msg.includes("f") && msg.includes("chat")) {
        message.channel.send("F");
    } 

    if (msg === 'wow') {
        message.channel.send("monkaHmm");
    }
});
