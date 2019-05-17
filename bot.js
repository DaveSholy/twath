const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame("▷ ◉──────── 00:40.", "https://www.twitch.tv/Alpha");
});
 

const myid = ['569861608344518660'];
const prefix = ['-'];



client.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الان وقــت الانــتــقــام تــحــمــل مــاذا وصــل لــك **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية

client.login(process.env.BOT_TOKEN);


