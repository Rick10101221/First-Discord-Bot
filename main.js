const Discord = require('discord.js');
const client = new Discord.Client();

const sourceFile = require('./token.js');
const token = sourceFile.myToken;

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


// testing2
