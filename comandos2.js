const Discord = require("discord.js");
const config = require('../config.json');
module.exports.run = async (client, message, args) => {
    
    const emb = new Discord.RichEmbed()
        .setAuthor("*Aqui Está Meus Comandos2.*")
        .addField(`**${config.p}doar**`, `» Para receber os email de doação.`)
        .addField(`**${config.p}invite**`, `» Para pegar um convite para chama seu amigo.`)
        .addField(`**${config.p}botinfo**`, `» Para mostar o dia que ele foi criado.`)
        .addField(`**${config.p}serverinfo**`, `» Para mostra o dia que ele foi criado.`)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`garrosh - Todos direitos reservados.`, message.author.avatarURL)
        .setColor("GREEN")
        message.delete(4000);
    message.channel.send(emb)
}
