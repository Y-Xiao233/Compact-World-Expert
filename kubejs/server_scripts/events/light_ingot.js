ItemEvents.rightClicked(event =>{
    const {level, item, player, server} = event
    let count = player.mainHandItem.count
    if(item.id !== 'kubejs:rainbow_ingot') return
    if(level.dimension != 'minecraft:overworld') return

    if(count >= 1){
        server.runCommandSilent('execute if entity @a[tag='+player.uuid+'] in minecraft:overworld unless entity @a[tag='+player.uuid+',x=28,y=0,z=10,dx=-49,dy=13,dz=-21] run give @a[tag='+player.uuid+'] kubejs:light_ingot')
        server.runCommandSilent('execute if entity @a[tag='+player.uuid+'] in minecraft:overworld unless entity @a[tag='+player.uuid+',x=28,y=0,z=10,dx=-49,dy=13,dz=-21] run clear @a[tag='+player.uuid+'] kubejs:rainbow_ingot 1')
    }
})