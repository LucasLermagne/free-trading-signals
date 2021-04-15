const Discord = require("discord.js");

const client = new Discord.Client;


const prefix = "!";



client.on("ready",()=>{
    console.log("bot opérationnel");

    
    client.guilds.forEach(guild => {
            guild.channels.forEach(channel => {
            if(channel.name == "free-trading-signals"){
                channel.send("FLMUSDT	VOLUM>5-10%	BUY>0,85-0,75	SL>0,65	TP>1,35-1,85");
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

