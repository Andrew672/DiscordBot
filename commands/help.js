module.exports = {
    name:'help',
    aliases :['aide','helps'],
    run:async(bot,message,args)=> {
        const Discord = require('discord.js');
        message.channel.send({embed:{
			color:'#ba9704',
			
			title : 'Voici les différentes commandes :',
			url :"https://www.instagram.com/a_mbch/",
			description:"Pour l'instant, il'y a très peu de commandes, n'hésitez pas à me donner des idées",
			fields:[{
				name : '!cours create <matière> <professeur> <élèves concernés(@role)> <heure> <date> <durée> <lien du cours>',
				value : "Cette commande permet d'indiquer aux élèves concernés, la programmation d'un cours."+ "\nPour utiliser cette commande, je vous propose un exemple :" + 
				" \n!cours create @MonsieurSurrin @élèves 15h30 02/05 2 https://google.fr"+
				"\nDonc on annonce ici , un cours de Français à touts les élèves le 02/05 à 15h30 pour une durée de 2h."
				},{
				name : '!liens',
				value : "Cette commande permet d'afficher tous les liens des cours des différentes matières."
				},{
					name : '!clear <nbr>',
					value : "Cette commande permet de supprimer un certains nombre de messages."
					}],
			timestamp : new Date(),
			footer:{
				icon_url:"https://i.imgur.com/1jpGDRw.jpg",
				url:"https://www.instagram.com/a_mbch/",
				text:"Crée par Andrew M"
            }}})

        }
        }