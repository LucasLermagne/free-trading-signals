const Discord = require("discord.js");

const client = new Discord.Client;


const prefix = "!";

var nbSignals = 0;
var crypto ="";
var date ="";
var size ="";
var buyLevel ="";
var stopLoss ="";
var takeProfit ="";

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
        .setFooter("I authorise the sharing of our trading signals", "https://image.noelshack.com/fichiers/2021/15/5/1618586766-img-20210414-182812-004.jpg")

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
         else if(msg.content == prefix + "verif"){
            msg.channel.send("date  " +date);
            msg.channel.send("crypto  " +crypto);  
            msg.channel.send("size  " +size);  
            msg.channel.send("buyLevel  " +buyLevel);  
            msg.channel.send("stopLoss  " +stopLoss);  
            msg.channel.send("takeProfit  " +takeProfit);    
       
         }
         else if(msg.content == prefix + "send"){
            nbSignals = nbSignals +1;
            client.guilds.forEach(guild => {
                guild.channels.forEach(channel => {
                if(channel.name == "💸┇free-signals"){
                    const embed = new Discord.RichEmbed()
                    .setTitle("New signal")
                    
                    .setColor(0x00AE86)
                    .setFooter("I authorise the sharing of our trading signals", "https://image.noelshack.com/fichiers/2021/15/5/1618586766-img-20210414-182812-004.jpg")
                    .setTimestamp()
                    .addField(":sparkles:CRYPTO", crypto, true)
                    .addField(":calendar:DATE", date, true)
                    .addField(":dollar:SIZE", size, true)

                    .addField(":shopping_cart:BUY LEVEL ", buyLevel, true)
                    .addField(":dart:TAKE PROFIT ", takeProfit, true) 
                    .addField("⛔️STOP LOSS ", stopLoss, true);

                    
                    channel.send({embed});
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

        else if(msg.content.startsWith(prefix+"setCrypto ")){
            crypto = msg.content.substr("!setCrypto ".length);
            msg.channel.send("Crypto saved " +crypto);   
        }
        else if(msg.content.startsWith(prefix+"setDate ")){
            date = msg.content.substr("!setDate ".length);
            msg.channel.send("date saved " +date);   
        }
        else if(msg.content.startsWith(prefix+"setSize ")){
            size = msg.content.substr("!setSize ".length);
            msg.channel.send("size saved " +size);   
        }
        else if(msg.content.startsWith(prefix+"setBuyLevel ")){
            buyLevel = msg.content.substr("!setBuy ".length);
            msg.channel.send("buyLevel saved " +buyLevel);   
        }
        else if(msg.content.startsWith(prefix+"setStopLoss ")){
            stopLoss = msg.content.substr("!setStopLoss ".length);
            msg.channel.send("stopLoss saved " +stopLoss);   
        }
        else if(msg.content.startsWith(prefix+"setTakeProfit ")){
            takeProfit = msg.content.substr("!setTakeProfit ".length);
            msg.channel.send("takeProfit saved " +takeProfit);   
        }
    }

});

client.login(process.env.TOKEN);


