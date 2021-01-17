const Discord = require('discord.js');

const bot = new Discord.Client();

const token = "ODAwMzUxNzE3NjczNjY0NTIy.YAQ3nw.bE1eW6uhqMU_UDkQuY33ZdkM5_0";

bot.login(token);

bot.on('ready', function(){
    console.log('Bot Ready');
});

bot.on('message', function(message){
    if(message.content == "Hi"){
        message.reply('Hi');
        // message.delete();
    }
});