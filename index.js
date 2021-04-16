const Discord = require("discord.js");

const client = new Discord.Client;


const prefix = "!";

var nbSignals = 0;
var call ="";

client.on("ready",()=>{
    console.log("bot opérationnel");

    


});

client.on("message",msg =>{
    if(msg.author.bot) return;
    if(msg.content == prefix + "commandes"){
       msg.channel.send(" !create [Signal]  !info  !send   !setNbSignals [number] ");

    }

    if(msg.content == prefix + "test"){

        const embed = new Discord.RichEmbed()
        .setTitle("New signal")
        
        .setColor(0x00AE86)
        .setFooter("I authorise the sharing of our trading signals", "http://i.imgur.com/w1vhFSR.png")
        .setImage("http://i.imgur.com/yVpymuV.png")
        .setThumbnail("http://i.imgur.com/p2qNFag.png")
        /*
        * Takes a Date object, defaults to current date.
        */
        .setTimestamp()
        .addField(":sparkles:CRYPTO", "IOST/USDT", true)
        .addField(":calendar:DATE", "16-03-2021", true)
        .addField(":dollar:SIZE", "5-15%", true)
        
        .addField(":shopping_cart:BUY LEVEL ", "02,25-1,9", true)
        .addField(":dart:TAKE PROFIT ", "0,95-0,12", true) 
        .addField("⛔️STOP LOSS ", "0,059", true);

        
        msg.channel.send({embed});
     }

    if(msg.content == prefix + "infoo"){
        msg.channel.send(" Info trading signals");
 
     }

     
      // NEW CALL
     if( msg.channel.id == "832521473213202472" || msg.author.id == "216221458223857664"){
        if(msg.content.startsWith(prefix+"create ")){
            //call = msg.content.slice(prefix.lenght).trim();
            call = msg.content.substr("!create ".length);
            msg.channel.send("call saved " +call);

         }
         else if(msg.content == prefix + "info"){
            msg.channel.send("Call info " +call);

          
         }
         else if(msg.content == prefix + "send"){
            nbSignals = nbSignals +1;
            client.guilds.forEach(guild => {
                guild.channels.forEach(channel => {
                if(channel.name == "💸┇free-signals"){
                    channel.send(call);
                }
                else if(channel.id == "832570617295405096"){
                    channel.setName("Total Signals: "+nbSignals);
                }
                });
            
             });
         }
         else if(msg.content.startsWith(prefix+"setNbSignals ")){
            nbSignals = msg.content.substr("!setNbSignals ".length);
            msg.channel.send("nb Signals saved " +nbSignals);


            client.guilds.forEach(guild => {
                guild.channels.forEach(channel => {
                if(channel.id == "832570617295405096"){
                    channel.setName("Total Signals: "+nbSignals);
                }
                });       
             });

        }
    }

});

client.login(process.env.TOKEN);


