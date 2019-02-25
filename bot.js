const dsicord = require ('discord.js');
const bot = new dsicord.Client();
const TOKEN = 'NDg2OTk2ODIyNTI3ODM2MTYx.D1Vm1Q.mSlpAucGCIrmaLi4C4TTf2sXA1M'
const prefix = "+";

bot.on('message', function(message){
    if(message.content == 'hi')
    {
        message.reply('hi how are you');

    }
});



bot.login(TOKEN);
