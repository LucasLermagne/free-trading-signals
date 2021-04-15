const Discord = require("discord.js");

const client = new Discord.Client;


const prefix = "!";



client.on("ready",()=>{
    console.log("bot opérationnel");


    //parcours les serveur
    client.guilds.cache.forEach(guild => {
        console.log(`${guild.name} | ${guild.id}`);
        //parcours les chanelles de chaque serveur
        guild.channels.cache.forEach(channel => {
            if(channel.name == "anonces"){
                console.log(`${channel.name} | ${channel.id}`);
                channel.send("test");
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

client.login("ODMyMjMyNDM3MTE4NDAyNjMw.YHgy2w.3EnfFsneRT0izNlQjg0xejVpvi0");
