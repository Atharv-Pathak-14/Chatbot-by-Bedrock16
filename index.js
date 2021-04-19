const Discord = require('discord.js');

const client = new Discord.Client();

const alexa = new require('alexa-bot-api');

var chatbot = new alexa('aw2plm');

client.once("ready", () => {

    console.log('Bot is ready by BEDROCK16!');

client.on("message", async message => {

  if (message.channel.id == 'CHANNEL ID') {

    if (message.author.bot) return;

      let content = message.content;

        if(!content) return;

            chatbot.getReply(content).then(r => message.channel.send(r));

        }

    });

});

client.login('TOKEN');

