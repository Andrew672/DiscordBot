module.exports = {
    name:'aleat',
    aliases :['aleats'],
    run:async(bot,message,args)=> {
        const Discord = require('discord.js');
        var nombreAleatoire = Math.round(Math.random()*1);
        console.log(nombreAleatoire);
        var reponse ="";
        if(nombreAleatoire == 1){
    reponse = 'eve'
        } else {
            reponse ='leve'

        }
        message.channel.send(reponse)
        }}
        