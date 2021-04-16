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

     
      // NEW CALL
     if( msg.channel.id == "832521473213202472" || msg.author.id == "216221458223857664"){
        if(msg.content == prefix + "newCall"){
            const call = msg.content.slice(prefix.lenght).trim();
            msg.channel.send("Call save" + call);
         }
         if(msg.content == prefix + "newCallSend"){
            client.guilds.forEach(guild => {
                guild.channels.forEach(channel => {
                if(channel.name == "free-trading-signals"){
                    channel.send("16-03-2021 IOSTUSDT   SIZE> 5-15%    BUY LEVEL >0,072-0,065    SL>0,059    TP>0,95-0,12");
                    
                }
                });
            
             });
         }
    }

});

client.login(process.env.TOKEN);


