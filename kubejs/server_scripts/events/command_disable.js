ServerEvents.command(event =>{
    let command = event.getParseResults().getReader().getString()
    var fly = /fly/
    if(fly.exec(command)!=null){
        event.server.tell(Text.translate('tip.compact_world.fly'))
        event.cancel()
    }
})

// ServerEvents.command(event =>{
//     let command = event.getParseResults().getReader().getString();


//     event.getServer().getPlayerList().getPlayers().forEach(player =>{
//         if(!(player.isCreative() || player.isSpectator())){
//             var say = /say/
//             if(say.exec(command) != null){
//                 event.server.tell("111")
//                 event.cancel()
//             }
//         }
//     })
// })