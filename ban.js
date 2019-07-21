const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();
    let membro = message.mentions.members.first();
    if(!membro) return message.reply(`para eu bani-lo, preciso que você confirme.`).then(glima=>glima.delete(3000));

    let motivo = args.slice(1).join(" ");
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`${message.author}, você não tem permissão para banir!`).then(glima=>glima.delete(5000));
    if(!motivo) return message.channel.send(`${message.author}, coloque um motivo.`).then(glima=>glima.delete(3000));
    if(!message.guild.member(membro).bannable) return message.channel.send(`${message.author}, eu não posso punir esse usuário!`).then(glima=>glima.delete(5000));
    
    message.guild.member(membro).ban(7, motivo);

    let ban = new Discord.RichEmbed()
    .setAuthor(`Usuário banido - ${membro.user.username}`, membro.user.avatarURL)
    .addField(`Autor:`, message.author.username)
    .addField(`Membro:`, membro.user.username)
    .addField(`Motivo:`, motivo)
    .setTimestamp()
    .setColor("#ff0000")
    .setFooter(`${client.user.username} - Bans`, client.user.avatarURL)
let incidentschannel = message.guild.channels.find(`name`, "punições");
    if (!incidentschannel) return message.reply("Não encontrei o canal punições.");
    incidentschannel.send(ban);
        message.channel.send("✅ Punição aplicada com sucesso!")
    }
