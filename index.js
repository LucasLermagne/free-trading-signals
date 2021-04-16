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

    }
    if(msg.content == prefix + "info"){
        msg.channel.send(" Info trading signals");
 
     }

     if(msg.content == prefix + "news"){
        client.guilds.forEach(guild => {
            guild.channels.forEach(channel => {
            if(channel.name == "free-trading-signals"){
                channel.send("16-03-2021 IOSTUSDT   SIZE> 5-15%    BUY LEVEL >0,072-0,065    SL>0,059    TP>0,95-0,12");
                
            }
            });
        
      });

 
     }
});

client.login(process.env.TOKEN);


