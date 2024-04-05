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
})