const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");


module.exports = {
  name: "pbaby",
  aliases: [],
  description: "Show Photo",
  usage: "Photo",
  run: async (client, message, args) => {
   
    let replies = ["https://cdn.discordapp.com/attachments/699339102989844500/854394237868834886/image2.jpg","https://cdn.discordapp.com/attachments/699339102989844500/854394237499998218/image1.jpg","https://cdn.discordapp.com/attachments/699339102989844500/854394237286350858/image0.jpg","https://cdn.discordapp.com/attachments/699339102989844500/854351238082461696/cift_y.png","https://cdn.discordapp.com/attachments/699339102989844500/854351121353932800/cift_h.jpg","https://cdn.discordapp.com/attachments/699339102989844500/853235886040285224/0407a5f6d8627c0585f1ed88692a2beb.png","https://cdn.discordapp.com/attachments/699339102989844500/853014123894145085/IMG_20210608_003506.jpg"];

    let result = Math.floor((Math.random() * replies.length));
    
    let photoembed = new Discord.MessageEmbed()

    .setTitle("Baby Photo")
    
      .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

     message.lineReplyNoMention(photoembed);

   
  }
};
