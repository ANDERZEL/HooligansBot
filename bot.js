const dsicord = require ('discord.js');
const bot = new dsicord.Client();
const TOKEN = ''
const prefix = "+";

bot.on('message', function(message){
    if(message.content == 'hi')
    {
        message.reply('hi how are you');

    }
});



bot.login(TOKEN);
