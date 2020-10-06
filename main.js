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

    if (msg == 'mirror mirror on the wall who\'s the shortest of them all?') {
        message.channel.send('the shortest the shortest who can it be? that\'d be ricky, can\'t you see?');
    }

    else if (msg.includes('andy') ||
    msg.includes('ritik') ||
    msg.includes('ricky') ||
    msg.includes('rickesh') ||
    msg.includes('rylee')) {
        if (msg.includes('andy')) {
            message.channel.send('andy has his dicks out for harambe');
        } else if (msg.includes('ritik')) {
            message.channel.send('ritik has his dick out for harambe');
        } else if (msg.includes('ricky')) {
            message.channel.send('ricky has his dick out for harambe');
        } else if (msg.includes('rickesh')) {
            message.channel.send('rickesh has his dick out for harambe');
        } else {
            message.channel.send('rylee has his dicks out for harambe');
        }
    }
    
    else if (msg.includes('faggot') || 
        msg.includes('fuck') || 
        msg.includes('bitch') || 
        msg.includes('shit') ||
        msg.includes('fag') ||
        msg.includes('ass') ||
        msg.includes('cunt')) {
        message.channel.send('UH OH STINKY');
    }

    else if (msg == 'uh oh') {
        message.channel.send('STINKY');
    }

    else if (msg.includes('poopoo')) {
        message.channel.send('PEEPEE')
    }

    else if (msg.includes('peepee')) {
        message.channel.send('POOPOO')
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
