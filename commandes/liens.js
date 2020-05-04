const Discord = require('discord.js');

module.exports.run = async (bot, message) =>{
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
        }}})
}

module.exports.help = {
    name: "liens"
}