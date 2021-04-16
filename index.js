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
        /*
        let embedmsg = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
        msg.channel.send(embedmsg);*/

        const embed = new Discord.RichEmbed()
        .setTitle("New signal")
        
        .setColor(0x00AE86)
        .setDescription("Notre equipe travaille pour vous fournir des signaux de qualitée")
        .setFooter("I authorise the sharing of our trading signals", "http://i.imgur.com/w1vhFSR.png")
        .setImage("http://i.imgur.com/yVpymuV.png")
        .setThumbnail("http://i.imgur.com/p2qNFag.png")
        /*
        * Takes a Date object, defaults to current date.
        */
        .setTimestamp()
        .addField(":calendar:DATE","16-03-2021")
        .addField(":sparkles:CRYPTO","IOST/USDT")
        .addField(":dollar:SIZE","5-15%")
        .addField(":shopping_cart:BUY LEVEL ","02,25-1,9")
        .addField(":dart:TAKE PROFIT ","0,95-0,12")
        .addField("⛔️STOP LOSE ","0,059")
        /*
        * Inline fields may not display as inline if the thumbnail and/or image is too big.
        */
        .addField(":calendar:DATE", "16-03-2021", true)
        .addBlankField(true)
        .addField(":sparkles:CRYPTO", "IOST/USDT", true)

        .addField(":dollar:SIZE", "5-15%", true)
        .addBlankField(true)
        .addField(":shopping_cart:BUY LEVEL ", "02,25-1,9", true)

        .addField("⛔️STOP LOSE ", "0,059", true)
        .addBlankField(true)
        .addField(":dart:TAKE PROFIT ", "0,95-0,12", true);    
        
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


