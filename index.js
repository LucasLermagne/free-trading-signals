const Discord = require("discord.js");

const client = new Discord.Client;


const prefix = "!";




client.on("ready",()=>{
    console.log("bot opérationnel");

    


});

client.on("message",msg =>{
    if(msg.author.bot) return;
    if(msg.content == prefix + "ping"){
       msg.channel.send(" pong"+ msg.author.id);

    }
    if(msg.content == prefix + "info"){
        msg.channel.send(" Info trading signals");
 
     }

     
      // news depuis salon specifique
     if( msg.channel.id == "832521473213202472"){
        if(msg.content == prefix + "news"){
            client.guilds.forEach(guild => {
                guild.channels.forEach(channel => {
                if(channel.name == "free-trading-signals"){
                    channel.send("16-03-2021 IOSTUSDT   SIZE> 5-15%    BUY LEVEL >0,072-0,065    SL>0,059    TP>0,95-0,12");
                    
                }
                });
            
             });
         }
    }

    // news depuis MOI
});

client.login(process.env.TOKEN);


