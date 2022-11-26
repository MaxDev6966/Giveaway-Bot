const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("Absxoxot")
      .setTitle("Command List & Guide for the Bot")
      .setDescription("Below are Commands you can do with Bot, Right now there is only 6 commands available, more commands will be added soon.")
      .addField("🎁 Giveaway 🎁","start [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]")
      .addField("Examples", "g!start #giveaway 5m 1 Testing\ng!end Testing\ng!reroll Testing")
      .addField("Utility", "ping, invite", true)
      .addField("Information", "stats", true)
      .addField("Check out", "[This Channel](https://youtube.com/channel/UC6eeR-yYa6A0SDXNy7uU3sw) to make your own giveaway bot")
      .setTimestamp()
      .setColor("FFFC10")
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**Check Your Dm 📥**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}

