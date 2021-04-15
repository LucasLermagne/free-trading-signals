const Discord = require("discord.js");

const client = new Discord.Client;


const prefix = "!";



client.on("ready",()=>{
    console.log("bot opérationnel");
    console.log("nb serveurs : " +client.guilds.size);
    

    for(var i= 0; i < client.guilds.size; i++)
    {
        console.log("serveur numero: " + i);
       // console.log("serveur name: " + client.guilds);    
    }
    
    client.guilds.forEach(server => {
        console.log(server.name + " (id: " + server.id + ")");
    });


});

client.on("message",msg =>{
    if(msg.author.bot) return;
    if(msg.content == prefix + "ping"){
       msg.channel.send(" pong");

        


        client.guilds.forEach(guild => {
        console.log(`${guild.name} | ${guild.id}`);
            guild.channels.forEach(channel => {
            if(channel.name == "anonces"){
                console.log(`${channel.name} | ${channel.id}`);
            }
            });
        
      });

    }
});

client.login(process.env.TOKEN);

