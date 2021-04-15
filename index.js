const Discord = require("discord.js");

const client = new Discord.Client;


const prefix = "!";



client.on("ready",()=>{
    console.log("bot opérationnel");

    
    client.guilds.forEach(guild => {
        console.log(`${guild.name} | ${guild.id}`);
            guild.channels.forEach(channel => {
            if(channel.name == "free-trading-signals"){
                console.log(`${channel.name} | ${channel.id}`);
                channel.send("Achete .....");
            }
            });
        
      });


});

client.on("message",msg =>{
    if(msg.author.bot) return;
    if(msg.content == prefix + "ping"){
       msg.channel.send(" pong");

    }
});

client.login(process.env.TOKEN);

