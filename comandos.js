const Discord = require("discord.js")
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
    
    const emb = new Discord.RichEmbed()
        .setAuthor("*Aqui Está Meus Comandos.*")
        .addField(`**${config.p}ping**`, `» Para saber meu ping.`)
        .addField(`**${config.p}apagar**`, `» Para Apagar as mensagem do chat. Apenas adminstrador.`)
        .addField(`**${config.p}say**`, `» Para enviar uma mensagem com o bot. Apenas adminstrador.`)
        .addField(`**${config.p}anunciar**`, `» Para fazer um anúncio no grupo. Apenas adminstrador.`)
        .addField(`**${config.p}tag**`, `» Para solicita tag no canal #💯solicita-tag .`)
        .addField(`**${config.p}ban**`, `» Para dar ban em um membro . Apenas adminstrador.`)
        .addField(`**${config.p}kick**`, `» Para kicka um membro do server. Apenas adminstrador.`)
        .addField(`**${config.p}warn**`, `» Para reporta um membro. Apenas adminstrador.`)
        .addField(`**${config.p}ajuda**`, `» Para explica um pouco sobre mim.`)
        .addField(`**${config.p}avatar**`, `» Para abaixa sua foto de perfil.`)
        .addField(`**${config.p}comandos2**`, `» Para ver mais comandos.`)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`CLÃ FENIX - Todos direitos reservados.`, message.author.avatarURL)
        .setColor("GREEN")
        message.delete(4000);
    message.channel.send(emb)
}
