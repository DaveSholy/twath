const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame("Stay Away from me Now before you Kill.", "https://www.twitch.tv/Alpha");
});
 
 


client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_SPAM);
client.login(process.env.BOT_LOG);
client.login(process.env.BOT_SWAG);
client.login(process.env.BOT_LOL);
client.login(process.env.BOT_CREDIT);
client.login(process.env.BOT_XXc);

