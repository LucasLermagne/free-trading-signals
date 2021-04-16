const Discord = require("discord.js");

const client = new Discord.Client;


const prefix = "!";

const call = "";


client.on("ready",()=>{
    console.log("bot opérationnel");

    


});

client.on("message",msg =>{
    if(msg.author.bot) return;
    if(msg.content == prefix + "ping"){
       msg.channel.send(" pong");

    }
    if(msg.content == prefix + "info"){
        msg.channel.send(" Info trading signals");
 
     }

     
      // NEW CALL
     if( msg.channel.id == "832521473213202472" || msg.author.id == "216221458223857664"){
        if(msg.content == prefix + "create"){
            const call = msg.content.slice(prefix.lenght).trim();
            msg.channel.send("Call saved " + call);
            console.log("Call saved " + call);

            const messageSlice = msg.content.slice(prefix.lenght).trim();
            msg.channel.send(messageSlice)
         }
         else if(msg.content == prefix + "info"){
            msg.channel.send("Call info " +call);
            console.log("Call info " + call);

            let rich = new discord.RichEmbed();
            rich.setTitle('Lien')
                .setAuthor('Prochaine migration des spawns' , 'http://chakalis49.ovh/bot/migration')
                .setColor(color.purple)
                .setDescription('Jeudi 15 Novembre à 1H')
                .setFooter('Bot by Chakalis49' , 'http://chakalis49.ovh/bot/ppchakalis49')
                .setURL('https://pokemon.gameinfo.io/fr/events')
                msg.channel.send({embed: rich});
            console.log("--- migration effectué");
         }
         else if(msg.content == prefix + "send"){
            client.guilds.forEach(guild => {
                guild.channels.forEach(channel => {
                if(channel.name == "free-trading-signals"){
                    channel.send(call);
    
                }
                });
            
             });
         }
    }

});

client.login(process.env.TOKEN);


