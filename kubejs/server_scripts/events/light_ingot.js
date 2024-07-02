//此段代码来自FalAut在discord的latvian.dev频道中的示例魔改
//链接:https://discord.com/channels/303440391124942858/1247948683002249298/1247948683002249298

LevelEvents.tick(event =>{
    const { level } = event
    if(level.dimension != 'minecraft:overworld') return

    level.entities.filterSelector('@e[type=item]').forEach((entity) => {
        if (
            entity.item.id == "kubejs:rainbow_ingot" &&
            entity.y < level.getMinBuildHeight() &&
            entity.y - entity.getDeltaMovement().y() < -10 + level.getMinBuildHeight()
        ) {
            let itemEntity = entity.block.createEntity('item')
            itemEntity.item = 'kubejs:light_ingot'
            itemEntity.item.count = entity.item.count
            itemEntity.fallDistance = entity.fallDistance
            itemEntity.addTag('void_convert')
            itemEntity.spawn()
            entity.discard()
        }
    })
})

EntityEvents.spawned('item', (event) => {
    const { entity } = event

    if (entity.item == 'kubejs:light_ingot' && entity.tags.contains('void_convert')) {
        entity.setDeltaMovement(Vec3d(0, (entity.fallDistance + 3) / 50, 0))
        entity.setNoGravity(true)
        entity.setGlowing(true)
    }
})