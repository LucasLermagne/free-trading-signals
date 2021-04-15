const Discord = require("discord.js");

const client = new Discord.Client;


const prefix = "!";



client.on("ready",()=>{
    console.log("bot opérationnel");


 
    


});

client.on("message",msg =>{
    if(msg.author.bot) return;
    if(msg.content == prefix + "ping"){
       msg.channel.send(" pong");

       client.guilds.cache.forEach(guild => {
        console.log(`${guild.name} | ${guild.id}`);
           if(guild.channels){
            guild.channels.cache.forEach(channel => {
                if(channel.name == "anonces"){
                    console.log(`${channel.name} | ${channel.id}`);
                    //channel.send("test");
                }
              });
           }
        
      });

    }
});

client.login(process.env.TOKEN);
