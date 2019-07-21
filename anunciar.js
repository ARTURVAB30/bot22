const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete(4000);
    let anunciar = args.join(" ");
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author}, você não tem permissão!`).then(glima=>glima.delete(5000));
    if(!anunciar) return message.channel.send(`${message.author}, use: **/anunciar <anúncio>**`).then(anunciar=>anunciar.delete(4000));

    let embed = new Discord.RichEmbed()
    .setAuthor('Anúncio!', "https://cdn.discordapp.com/emojis/526428403847528449.gif?v=1")
    .setDescription(`${anunciar}`)
    .setTimestamp()
    .setFooter(`CLÃ FENIX - Todos direitos reservados.`, message.author.avatarURL)
    .setColor("RANDOM")
    message.channel.send(`@everyone`).then(anunciar=>anunciar.delete());
    message.delete();
    message.channel.send(embed).then(msg => {
        msg.react("✅")
    })

}
