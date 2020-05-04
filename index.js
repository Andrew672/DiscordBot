const Discord = require('discord.js');
const bot = new Discord.Client();
const { PREFIX , TOKEN} = require('./config');

bot.on('ready' , message => {
    console.log("I'm Ready !");

    bot.user.setActivity("Surveille les ptits 1G3");
});

bot.on('message', message =>{
    if (!message.content.startsWith(PREFIX)) return;
    const args = message.content.trim().split(/ +/g);
	const cmd = args[0].slice(PREFIX.length).toLowerCase();
	if (isNaN(message.content)){message.delete()};
	
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#ED6428')
	.setTitle('Cours Annoncé : ' + args[2])		
	.setAuthor('El Professor', 'https://i.imgur.com/xcjWYXF.jpg')
	.setDescription('Un cours viens d\'être annoncé !')
	.setThumbnail('https://i.imgur.com/xcjWYXF.jpg')
	.addFields(
		{ name: 'Crée par :', value: message.author },
		{ name: 'Professeur : ', value: args[3] },
		{ name: 'Élèves concernés : ', value: args[4] },
		{ name: 'Date & Heure : ', value: "Le " + args[6] + " à partir de " + args[5] },
		{ name: 'Durée : ', value: args[7] + "h" },
		{ name: 'Lien du Cours :', value: args[8], inline: true },
	)
	.setImage('https://i.imgur.com/LVBYm3z.jpg')
	.setTimestamp();
	
	

	if (cmd === 'create') {      
		if ((args[1] === "cours") && (args[2] !== undefined) && (args[3] !== undefined)
		&& (args[4] !== undefined)&& (args[5] !== undefined)&& (args[6] !== undefined)
		&& (args[7] !== undefined)&& (args[8] !== undefined)){
		{message.channel.send(exampleEmbed)}}
		
		else 
		message.channel.send("Respectez la syntaxe")}
	
	if (cmd === 'liens') {      
		message.channel.send({embed:{
			color:'#ba9704',
			
			title : 'Voici les différents liens des cours :',
			url :"https://www.instagram.com/a_mbch/",
			description:"Si il manque des liens, dites le moi !",
			fields:[{
						name : 'Français avec Mr SURRIN',
						value : "Discord : " + "https://discord.gg/ZcWfGcZ"},
					{
						name : 'Spé Physique Chimie avec Mme BURGY',
						value : "Bb Collaborate : " + "https://eu.bbcollab.com/collab/ui/session/guest/0d8883832f0347289d3bdb928b3e6259"},
					{
						name : 'Physique Chimie (Tronc Commun) avec Mr HELLER',
						value : "Framateam : " + "https://framateam.org/signup_user_complete/?id=hcyryw5ucb8i5jd67zk5k7sowr",	
					}
					],
			timestamp : new Date(),
			footer:{
				icon_url:"https://i.imgur.com/1jpGDRw.jpg",
				url:"https://www.instagram.com/a_mbch/",
				text:"Crée par Andrew M"
			}}})}
	
	
	if (cmd === 'clear'){
		if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Désoler , vous n'avez pas la permission !")
		let count = args[1]
		if(!count)return message.channel.send("Veuillez indiquez un nombre de messages à suprimmer")
		if (isNaN(count)) return message.channel.send("Indiquez un nombre valide !")
		if (count < 1 || count > 99) return message.channel.send("Indiquez un chiffre en 1 et 99 !")
		message.channel.bulkDelete(parseInt(count) + 1)
	}	

	else if (cmd === 'help'){
		message.channel.send({embed:{
			color:'#ba9704',
			
			title : 'Voici les différentes commandes :',
			url :"https://www.instagram.com/a_mbch/",
			description:"Pour l'instant, il'y a très peu de commandes, n'hésitez pas à me donner des idées",
			fields:[{
				name : '!create cours <matière> <professeur> <élèves concernés(@role)> <heure> <date> <durée> <lien du cours>',
				value : "Cette commande permet d'indiquer aux élèves concernés, la programmation d'un cours."+ "\nPour utiliser cette commande, je vous propose un exemple" + 
				" \n!create cours @MonsieurSurrin @élèves 15h30 02/05 2 https://google.fr"+
				"\nDonc on annonce ici , un cours de Français à touts les élèves le 02/05 à 15h30 pour une durée de 2h"
				},{
				name : '!liens',
				value : "Cette commande permet d'afficher tous les liens des cours des différentes matières"
				}],
			timestamp : new Date(),
			footer:{
				icon_url:"https://i.imgur.com/1jpGDRw.jpg",
				url:"https://www.instagram.com/a_mbch/",
				text:"Crée par Andrew M"
			}}})}
	
	else{
		message.channel.send('Erreur ! Faites !help pour voir les commandes !')
	}
	
}),   

       
bot.login(TOKEN)