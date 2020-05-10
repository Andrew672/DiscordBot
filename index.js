const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require ('fs');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
const { PREFIX , TOKEN} = require('./config');



bot.on('ready' , message => {
    console.log("I'm Ready !");

    bot.user.setActivity("Surveille les ptits 1G3");
});

const init = async()=>{
	fs.readdir(`./commands`,(err,files) => {
		if(err) return console.error(err);
		files.forEach(file =>{
			const props = require (`./commands/${file}`);
			bot.commands.set(props.name , props);
			props.aliases.forEach(alias => bot.aliases.set(alias, props.name));
			console.log(`Loaded ${file}`);

		})
	})
}
init()

bot.on('message',message =>{

    if (!message.content.startsWith(PREFIX)) return;
	const args = message.content.slice(PREFIX.length).split(" ");
	const command = args.shift().toLowerCase();
	const cmd = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command)) ;
	if (cmd) cmd.run(bot, message,args);
	if (isNaN(message.content)){message.delete()};
	
	
}),   

bot.on("messageReactionAdd",(messageReaction,user) =>{
	
	const message = messageReaction.message;
	const member = message.guild.members.cache.get(user.id);
	if(user.bot)return;
	const newrole1 = message.guild.roles.cache.find((role) => role.name ==="Présent")
	const newrole2 = message.guild.roles.cache.find((role) => role.name ==="Absent")
	if(messageReaction.message.channel.id !="707251561444933672"){}

    else if (messageReaction.emoji.name === '✅'){
		member.roles.add(newrole1.id);
		member.createDM().then((channel) =>{
			channel.send("Tu es noté **présent** pour le cours ! \n Si tu souhaite connaître les camarades présents au cours, n'hésite pas à faire !present. Et inversement pour voir ceux qui ne seront pas présent avec !absent" )
        
		})}
		else if (messageReaction.emoji.name === '❌'){
		member.roles.add(newrole2.id);
		member.createDM().then((channel) =>{
			channel.send("Tu es noté **absent** pour le cours ! \n Si tu souhaite connaître les camarades présents au cours, n'hésite pas à faire !present. Et inversement pour voir ceux qui ne seront pas présent avec !absent" )
			
})}})

bot.on("messageReactionRemove",(messageReaction,user) => {
	const message = messageReaction.message;
	const member = message.guild.members.cache.get(user.id);
	if(user.bot)return;
	const newrole1 = message.guild.roles.cache.find((role) => role.name ==="Présent")
	const newrole2 = message.guild.roles.cache.find((role) => role.name ==="Absent")
	if(messageReaction.message.channel.id !="707251561444933672"){}


	else if (messageReaction.emoji.name === '✅'){
	member.roles.remove(newrole1.id)
	}
	else if(messageReaction.emoji.name === '❌'){
		member.roles.remove(newrole2.id);}})

		
bot.login(TOKEN)
