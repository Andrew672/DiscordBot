module.exports = {
    name:'.',
    aliases :['parole','..','paroles'],
    run:async(bot,message,args)=> {
        const Discord = require('discord.js');
        var nombreAleatoire = Math.round(Math.random()*5);
        console.log(nombreAleatoire);
        var reponse ="";
        if(nombreAleatoire == 1){reponse = 'Eve lève toi et danse avec la vie ... \n *Julie Pietri*'} 
        else if(nombreAleatoire == 2){reponse = "Je m'présente, je m'appelle Henri \n J'voudrais bien réussir ma vie, être aimé \n *Daniel Balavoine*"} 
        else if(nombreAleatoire == 3){reponse = "Nous sommes en Guerre ! \n *Emmanuel Macron*"} 
        else if(nombreAleatoire == 4){reponse = "Ho ho ho, est-ce que tu m'entends, hey ho\nEst-ce que tu me sens, hey ho\nTouche-moi je suis là, hey ho ho ho ho \n *Tragédie*"} 
        else {reponse ="Und ich flieg, flieg, flieg wie ein Flieger,\nBin so stark, stark, stark wie ein Tiger,\nUnd so groß, groß, groß wie 'ne Giraffe, so hoch. Wooo"}
        message.channel.send({embed:{
			color:'#AB2001',
			
            title :message.author.username + " souhaiterait prendre la parole",
            description: reponse,
			timestamp : new Date(),
			footer:{
				icon_url:"https://i.imgur.com/1jpGDRw.jpg",
				url:"https://www.instagram.com/a_mbch/",
				text:"Crée par Andrew M"
            }}})

        }
        }
        