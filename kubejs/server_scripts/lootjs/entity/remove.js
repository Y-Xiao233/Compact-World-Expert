LootJS.modifiers((event) =>{
    event.addBlockLootModifier("botania:doppleganger").removeLoot('ars_nouveau:experience_gem')
    event.addBlockLootModifier("botania:doppleganger").removeLoot('botania:life_essence')
})