LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("botania:doppleganger")
        .addWeightedLoot(
            [5, 10],
            [Item.of('kubejs:terra_essence').withChance(100)]
        )

        event
        .addEntityLootModifier("minecraft:wither")
        .addWeightedLoot(
            [5, 10],
            [Item.of('minecraft:wither_rose').withChance(100)]
        )
});