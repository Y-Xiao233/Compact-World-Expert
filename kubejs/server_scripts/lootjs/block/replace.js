LootJS.modifiers((event) =>{
    event.addBlockLootModifier("minecraft:gravel").replaceLoot("minecraft:flint","minecraft:gravel")
    event.addBlockLootModifier('ae2:flawless_budding_quartz').replaceLoot('ae2:quartz_block','ae2:flawless_budding_quartz')
    event.addBlockLootModifier('ae2:flawless_budding_quartz').replaceLoot('ae2:flawed_budding_quartz','ae2:flawless_budding_quartz')
    event.addBlockLootModifier('ae2:quartz_cluster').replaceLoot('ae2:certus_quartz_crystal','ae2:certus_quartz_dust',true)
})