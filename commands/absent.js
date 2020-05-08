module.exports = {
    name :'absent',
    aliases :['absents'],
    run: async(bot,message,args)=> {
const Discord = require('discord.js');
const embed = new Discord.MessageEmbed()
			.setTitle(':man_teacher: **Élèves présents pour le cours :** :woman_teacher:')
			.setDescription(message.guild.roles.cache.find((role) => role.name ==="Absent").members.map(m=>m.user.tag).join('\n'))
			.setColor("#ED6428")
			.setFooter(`ID: ${message.author.id}`)
			
	
        return message.channel.send({embed})},}