const Discord = require('discord.js');
const client = new Discord.Client();

const sourceFile = require('./token.js');
const token = sourceFile.myToken;

client.login(token);

client.on('message', message => {
    if (message.author.bot) {
        return;
    }

    msg = message.content.toLowerCase();

    if (msg.includes('faggot') || msg.includes('fuck') || msg.includes('bitch')) {
        message.channel.send('UH OH STINKY');
    }

    else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('sup')) {
        message.channel.send("Hey there! <@" + message.author.id + ">");
    } 
    
    else if (msg.includes("uwu")) {
        message.channel.send("stfu weeb");
    } 
    
    else if (msg.includes("f") && msg.includes("chat")) {
        message.channel.send("F");
    } 
    
    else if (msg == "f") {
        message.channel.send("F");
    } 
    
    else if (msg === 'wow') {
        message.channel.send("monkaHmm");
    }
});


// testing2
