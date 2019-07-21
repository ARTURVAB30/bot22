const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');



client.on("ready", () => {
  client.user.setPresence({ game: { name: `CLÃ FENIX`, url: "https://www.twitch.tv/CLÃFENIX", type: 1 } });
  console.log("Online!")
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }

});

client.login(config.token);
console.log("Logado!");

client.on('message', message => {
  if (message.content == '<@539980207533064219>') {
    message.channel.send(`Meu prefixo é \`${config.prefix}\`, use **.ajuda**.`)
  }
});

client.on('guildMemberAdd', member => {
  let embed = new Discord.RichEmbed()
    .setTitle("Bem-Vindo")
    .setColor("RANDON")
    .setThumbnail(member.user.avatarURL)
    .setDescription(`${member}! Você acabou de entrar no servidor!`)
    .setFooter(`ID do membro: ${member.id}`, member.user.avatarURL);

  let canalEntrada = client.channels.get("595303772956131331")
    .send(embed);
  
});

client.on('guildMemberRemove', member => {
  let embed = new Discord.RichEmbed()
    .setTitle("Saiu!")
    .setColor("RANDON")
    .setThumbnail(member.user.avatarURL)
    .setDescription(`${member}! Acabou de sair do servidor!`)
    .setFooter(`ID do membro: ${member.id}`, member.user.avatarURL);

  let canalEntrada = client.channels.get("595303772956131331")
    .send(embed);

});

client.login(config.token);
