ServerEvents.command(event =>{
    let command = event.getParseResults().getReader().getString()
    var fly = /fly/
    if(fly.exec(command)!=null){
        event.server.tell(Text.translate('tip.compact_world.fly'))
        event.cancel()
    }
})