const dsicord = require ('discord.js');
const bot = new dsicord.Client();
const TOKEN = 'NTQ5MzAyODExODY4MDA0MzUz.D1R55Q.HBUZzVevJ0N0_TjtD7ZWJTSnPrU'
const prefix = "+";

bot.on('message', function(message){
    if(message.content == 'hi')
    {
        message.reply('hi how are you');

    }
});



bot.login(TOKEN);
