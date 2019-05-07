const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame("Stay away from me now.", "https://www.twitch.tv/Alpha");
});
 
client.on('ready', () => {
var x = client.channels.get("474786101366620161");
if (x) x.join();
}); 


client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_SPAM);
client.login(process.env.BOT_LOG);
client.login(process.env.BOT_SWAG);
client.login(process.env.BOT_LOL);
client.login(process.env.BOT_CREDIT);
client.login(process.env.BOT_XXc);

