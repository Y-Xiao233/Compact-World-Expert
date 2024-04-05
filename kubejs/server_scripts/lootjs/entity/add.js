LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("botania:doppleganger")
        .addWeightedLoot(
            [5, 10],
            [Item.of('kubejs:terra_essence').withChance(100)]
        )
});