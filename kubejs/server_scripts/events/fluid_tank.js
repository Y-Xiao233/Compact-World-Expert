BlockEvents.rightClicked(event =>{
    const {block, player, item, hand, server} = event
    var bucket = /.*:.*bucket/
    if(player.isCreative() || player.isSpectator()) return
    if(player.isFake()) return
    if(hand.name() != "MAIN_HAND") return
    if(block.id != "create:fluid_tank") return
    if(item.id == "minecraft:bucket") return
    if(!bucket.exec(item.id)) return
    let fluidId = block.getEntityData()["TankContent"]["FluidName"]
    let fluidAmount = block.getEntityData()["TankContent"]["Amount"]
    let handBucket = item.id
    if(fluidId == "minecraft:empty" || fluidId == handBucket.replace("_bucket","")){
        if(fluidAmount > 7000) return
        server.runCommandSilent(`data merge block ${block.x} ${block.y} ${block.z} {TankContent:{FluidName:"${handBucket.replace("_bucket","")}",Amount:${fluidAmount + 1000}}}`)
        player.mainHandItem.setCount(player.mainHandItem.getCount() - 1)
        player.give("minecraft:bucket")
        event.cancel()
    }
})


BlockEvents.rightClicked(event =>{
    const {block, player, item, hand, server} = event
    if(player.isCreative() || player.isSpectator()) return
    if(item.id != "minecraft:bucket") return
    if(player.isFake()) return
    if(hand.name() != "MAIN_HAND") return
    if(block.id != "create:fluid_tank") return
    let fluidId = block.getEntityData()["TankContent"]["FluidName"]
    let fluidAmount = block.getEntityData()["TankContent"]["Amount"]
    if(fluidId != "minecraft:empty" && fluidAmount >= 1000){
        player.mainHandItem.setCount(player.mainHandItem.getCount() - 1)
        server.runCommandSilent(`data merge block ${block.x} ${block.y} ${block.z} {TankContent:{FluidName:"${fluidId}",Amount:${fluidAmount - 1000}}}`)
        player.give(fluidId + "_bucket")
    }
})