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
    if(msg.content == prefix + "infoo"){
        msg.channel.send(" Info trading signals");
 
     }

     
      // NEW CALL
     if( msg.channel.id == "832521473213202472" || msg.author.id == "216221458223857664"){
        if(msg.content.startsWith(prefix+"create ")){
            const messageSlice = msg.content.slice(prefix.lenght).trim();
            var poll = msg.content.substr(prefix+"create ".length);
            console.log(messageSlice);
            console.log(poll);
         }
         else if(msg.content == prefix + "info"){
            msg.channel.send("Call info " +call);
            console.log("Call info " + call);

          
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


