const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    if (message.channel.permissionsFor(message.author).has('MANAGE_MESSAGES')) {
        if (args.length === 0) {
            return;
        } else if (args.length === 1) {
            message.channel.fetchMessages({
                limit: parseInt(args[0]) + 1
            }).then((messages) => {
                message.channel.bulkDelete(messages);
            });
        } else if (args.length === 2) {
            message.channel.fetchMessages({
                limit: parseInt(args[0]) + 1
            }).then((messages) => {
                let bulkMessages = [];
                messages.forEach((i) => {
                    if (i.author.id === args[1].replace(/@|<|>/g, "")) {
                        bulkMessages.push(i);
                    }
                });
                message.channel.bulkDelete(bulkMessages);
            });
        }
    }
}
