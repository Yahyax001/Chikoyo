const Discord = require("discord.js");
const  turkish = require("../../JSON/tr.json")

module.exports = {
  name: "textturkish",
  aliases: ["TextArabic", "Textarabic", "TEXTARABIC", "tt", "ttr"],
  description: "Show text",
  usage: "text",
  run: async (client, message, args) => {
	  
 let tr = turkish.tr[Math.floor((Math.random() * turkish.tr.length))];

    message.channel.send(tr).then(message => {
			message.react('🥺').then(r => {
				message.react('🖤');
           });
          });
      }
}
