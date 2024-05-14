PlayerEvents.tick(event =>{
    const {server, player, level} = event

    server.runCommandSilent(`tag ${player.uuid} add ${player.uuid}`)

    if(player.getInventory().contains('kubejs:swift_alloy_key')){
        player.stages.add('swift_space')
    }

    if(player.getInventory().contains('kubejs:sky_key')){
        player.stages.add('sky_space')
    }

    if(level.dimension != 'minecraft:overworld') return

    if(!(
        (player.creative)||
        (player.spectator)||
        (player.getInventory().contains('minecraft:gold_ingot'))
        )
    ){
        if((!player.stages.has('swift_space')) && (!player.stages.has('sky_space'))){
            server.runCommandSilent('execute if entity @a[tag='+player.uuid+'] in minecraft:overworld unless entity @a[tag='+player.uuid+',x=6,y=0,z=6,dx=-13,dy=13,dz=-13] run tellraw @a[tag='+player.uuid+'] "\u00a7c你不能离开这片区域，除非你是创造模式/观察者模式/拥有毕业物品"')
            server.runCommandSilent('execute if entity @a[tag='+player.uuid+'] in minecraft:overworld unless entity @a[tag='+player.uuid+',x=6,y=0,z=6,dx=-13,dy=13,dz=-13] run tp @a[tag='+player.uuid+'] 0 0 0')
        }else if((player.stages.has('swift_space')) && (!player.stages.has('sky_space'))){
            server.runCommandSilent('execute if entity @a[tag='+player.uuid+'] in minecraft:overworld unless entity @a[tag='+player.uuid+',x=28,y=0,z=10,dx=-35,dy=13,dz=-21] run tellraw @a[tag='+player.uuid+'] "\u00a7c你不能离开这片区域，除非你是创造模式/观察者模式/拥有毕业物品"')
            server.runCommandSilent('execute if entity @a[tag='+player.uuid+'] in minecraft:overworld unless entity @a[tag='+player.uuid+',x=28,y=0,z=10,dx=-35,dy=13,dz=-21] run tp @a[tag='+player.uuid+'] 0 0 0')
        }else if((!player.stages.has('swift_space')) && (player.stages.has('sky_space'))){
            server.runCommandSilent('execute if entity @a[tag='+player.uuid+'] in minecraft:overworld unless entity @a[tag='+player.uuid+',x=-20,y=0,z=-6,dx=27,dy=13,dz=13] run tellraw @a[tag='+player.uuid+'] "\u00a7c你不能离开这片区域，除非你是创造模式/观察者模式/拥有毕业物品"')
            server.runCommandSilent('execute if entity @a[tag='+player.uuid+'] in minecraft:overworld unless entity @a[tag='+player.uuid+',x=-20,y=0,z=-6,dx=27,dy=13,dz=13] run tp @a[tag='+player.uuid+'] 0 0 0')
        }else if((player.stages.has('swift_space')) && (player.stages.has('sky_space'))){
            server.runCommandSilent('execute if entity @a[tag='+player.uuid+'] in minecraft:overworld unless entity @a[tag='+player.uuid+',x=28,y=0,z=10,dx=-49,dy=13,dz=-21] run tellraw @a[tag='+player.uuid+'] "\u00a7c你不能离开这片区域，除非你是创造模式/观察者模式/拥有毕业物品"')
            server.runCommandSilent('execute if entity @a[tag='+player.uuid+'] in minecraft:overworld unless entity @a[tag='+player.uuid+',x=28,y=0,z=10,dx=-49,dy=13,dz=-21] run tp @a[tag='+player.uuid+'] 0 0 0')
        }
    }
})
