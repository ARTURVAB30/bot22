const Discord = require("discord.js");
const config = require('../config.json');
module.exports.run = async (client, message, args) => {
    
    const emb = new Discord.RichEmbed()
        .setAuthor("minha ajuda especial")
        .addField(`**.comandos1**`, `» Para Saber Todos os comandos.`)
        .addField(`**.Comando2**`, `» Os comando que você me pede serão apagado para não suja o chat.`)
        .setThumbnail(message.author.avatarURL)
        .setFooter(newFunction(), message.author.avatarURL)
        .setColor("RED")
        message.delete(1000000);
    message.channel.send(emb)
}

function newFunction() {
    return `CLÃ FÊNIX.`;
}
