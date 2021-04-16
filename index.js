const Discord = require("discord.js");

const client = new Discord.Client;
const embedmsg = new Discord.MessageEmbed();

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

        embedmsg.setColor('#0099ff');
        embedmsg.setTitle('Some title');
        embedmsg.setURL('https://discord.js.org/');
        embedmsg.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org');
        embedmsg.setDescription('Some description here');
        embedmsg.setThumbnail('https://i.imgur.com/wSTFkRM.png');
        embedmsg.addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        );
        embedmsg.addField('Inline field title', 'Some value here', true);
        embedmsg.setImage('https://i.imgur.com/wSTFkRM.png');
        embedmsg.setTimestamp();
        embedmsg.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
        msg.channel.send(embedmsg);
        
 
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


