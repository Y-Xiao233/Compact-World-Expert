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

    event
        .addEntityLootModifier("minecraft:skeleton")
        .addWeightedLoot(
            [0, 2],
            [Item.of('minecraft:bone').withChance(100)]
        )

    event
        .addEntityLootModifier("mekanismadditions:baby_skeleton")
        .addWeightedLoot(
            [0, 2],
            [Item.of('minecraft:bone').withChance(100)]
        )
});