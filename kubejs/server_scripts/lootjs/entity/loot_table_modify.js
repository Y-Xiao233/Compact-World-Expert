ServerEvents.entityLootTables((event) =>{
    event.modifyEntity("botania:doppleganger", (table) => {
        table.clearPools()
        table.addPool((pool) => {
            pool.rolls = [2, 3];
            pool.addItem('kubejs:terra_essence',1,2)
        })
        table.addPool((pool) => {
            pool.rolls = [2, 3];
            pool.addItem('botania:life_essence',1,1)
        })
    })

    event.modifyEntity("minecraft:wither", (table) => {
        table.clearPools()
        table.addPool((pool) => {
            pool.rolls = [2, 3];
            pool.addItem('minecraft:wither_rose',1,2)
        })
    })

    event.modifyEntity("minecraft:skeleton", (table) => {
        table.clearPools()
        table.addPool((pool) => {
            pool.rolls = [2, 3];
            pool.addItem('minecraft:bone',1,2)
        })
    })

    event.modifyEntity("mekanismadditions:baby_skeleton", (table) => {
        table.clearPools()
        table.addPool((pool) => {
            pool.rolls = [2, 3];
            pool.addItem('minecraft:bone',1,2)
        })
    })
})