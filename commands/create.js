module.exports = {
    name:'cours',
    aliases :['cour'],
    run:async(bot,message,args)=> {
    const Discord = require('discord.js');
 const exampleEmbed = new Discord.MessageEmbed()
 .setColor('#ED6428')
 .setTitle('```Cours Annoncé :```'+" " + args[1])		
 .setAuthor('El Professor', 'https://i.imgur.com/afyhe4f.png')
 .setDescription("```fix\nHEIN ? QUOI ? Je crois bien que tu as cours mon coco. Essaye de ne pas être en retard cette fois-ci.```")
 .setThumbnail('https://i.imgur.com/2nw3Z9s.png')
 .addFields(
     { name: 'Crée par :', value: message.author },
     { name: '**Professeur** : ', value: args[2] },
     { name: '**Élèves concernés** : ', value: args[3] },
     { name: '**Date & Heure** : ', value: "Le " + args[4] + " à partir de " + args[5] },
     { name: '**Durée** : ', value: args[6] + "h" },
     { name: '**Lien du Cours** :', value: args[7], inline: true },)
 .setImage('https://i.imgur.com/2P4mz7P.jpg')
 .setTimestamp(new Date())
 .setFooter("N'hésite pas à dire si tu seras présent ou non \nPrésent : ✅ || Absent :❌","https://i.imgur.com/1jpGDRw.jpg");

 if ((args[0]=== 'create') && (args[1] !== undefined) && (args[2] !== undefined) && (args[3] !== undefined)&& (args[4] !== undefined)&& (args[5] !== undefined) && (args[6] !== undefined)&& (args[7] !== undefined)){
    message.guild.roles.cache.find((role)=> role.name ==='Présent').delete()
    message.guild.roles.cache.find((role)=> role.name ==='Absent').delete()
    message.guild.roles.create({
		data:{
			name : 'Présent',
			color:'WHITE'
            }})
    message.guild.roles.create({
        data:{
            name : 'Absent',
            color:'WHITE'
            }})
    {    
        message.channel.send(exampleEmbed).then(function(message){
		message.react('✅')
        message.react("❌")})}}
else{ 
    message.reply("Respectez la syntaxe")}}




}