ServerEvents.command(event =>{
    let command = event.getParseResults().getReader().getString()
    var fly = /fly/
    if(fly.exec(command)!=null){
        event.server.runCommandSilent(`tellraw @a "\u00a7c这个指令被禁用了"`)
        event.cancel()
    }
})