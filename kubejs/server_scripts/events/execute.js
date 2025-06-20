PlayerEvents.tick(event =>{
    const {server, player, level} = event
    if(player.tags.contains("without_space_limit")){
        return
    }

    if(level.dimension != 'minecraft:overworld') return
    if((player.creative)||(player.spectator)||(player.getInventory().contains('kubejs:rainbow_ingot'))) return

    if(player.getInventory().contains('kubejs:swift_alloy_key')){
        player.stages.add('swift_space')
    }

    if(player.getInventory().contains('kubejs:sky_key')){
        player.stages.add('sky_space')
    }


    const baseSpace = level.getEntitiesWithin(AABB.of(-7,0,-7,7,13,7)).contains(player)
    const swiftSpace = level.getEntitiesWithin(AABB.of(-7,0,-10,29,13,11)).contains(player)
    const skySpace = level.getEntitiesWithin(AABB.of(7,0,7,-21,13,-7)).contains(player)
    const allSpace = level.getEntitiesWithin(AABB.of(-21,0,-11,29,13,11)).contains(player)


    function space(space){
        if(!space){
            let name = player.displayName.getString()
            player.tell(Text.translate('tip.compact_world.out_of_space'))
            server.runCommandSilent(`tp ${name} 0 0 0`)
            server.runCommandSilent(`gamemode creative ${name})}`)
            server.scheduleInTicks(1,event =>{
                server.runCommandSilent(`gamemode survival ${name}`)
            })
        }
    }

    if((!player.stages.has('swift_space')) && (!player.stages.has('sky_space'))){
        space(baseSpace)
    }else if((player.stages.has('swift_space')) && (!player.stages.has('sky_space'))){
        space(swiftSpace)
    }else if((!player.stages.has('swift_space')) && (player.stages.has('sky_space'))){
        space(skySpace)
    }else if((player.stages.has('swift_space')) && (player.stages.has('sky_space'))){
        space(allSpace)
    }
})