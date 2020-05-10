module.exports = {
    name:'liens',
    aliases :['lien'],
    run:async(bot,message,args)=> {

        message.channel.send({embed:{
			color:'#ba9704',
			
			title : 'Voici les différents liens des cours :',
			url :"https://www.instagram.com/a_mbch/",
			description:"Si il manque des liens, dites le moi !",
			fields:[{
						name : 'Français avec Mr SURRIN',
						value : "Discord : "Lien"},
					{
						name : 'Spé Physique Chimie avec Mme BURGY',
						value : "Bb Collaborate : " + "Lien"},
					{
						name : 'Physique Chimie (Tronc Commun) avec Mr HELLER',
						value : "Framateam : " + "Lien"},
					],
			timestamp : new Date(),
			footer:{
				icon_url:"https://i.imgur.com/1jpGDRw.jpg",
				url:"https://www.instagram.com/a_mbch/",
				text:"Crée par Andrew M"}
		}})}
	
    }
