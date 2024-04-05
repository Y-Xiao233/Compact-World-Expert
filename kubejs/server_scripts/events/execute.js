PlayerEvents.tick(event =>{
    event.server.runCommandSilent(`tag ${event.player.uuid} add ${event.player.uuid}`)
    if(!(
        (event.player.creative)||
        (event.player.spectator)||
        (event.player.getInventory().contains('minecraft:gold_ingot'))
        )
    ){
    event.server.runCommandSilent('execute if entity @a[tag='+event.player.uuid+'] in minecraft:overworld unless entity @a[tag='+event.player.uuid+',x=14,y=-60,z=1,dx=-13,dy=13,dz=13] run tellraw @a[tag='+event.player.uuid+'] "\u00a7c你不能离开这片区域，除非你是创造模式/观察者模式/拥有毕业物品"')
    event.server.runCommandSilent('execute if entity @a[tag='+event.player.uuid+'] in minecraft:overworld unless entity @a[tag='+event.player.uuid+',x=14,y=-60,z=1,dx=-13,dy=13,dz=13] run tp @a[tag='+event.player.uuid+'] 7 -60 7')
    }
})
