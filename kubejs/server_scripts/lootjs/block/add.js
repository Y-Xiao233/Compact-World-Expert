LootJS.modifiers((event) => {
    event.addBlockLootModifier('minecraft:grass').randomChance(0.2).addLoot('hexerei:belladonna_flower')
    event.addBlockLootModifier('minecraft:tall_grass').randomChance(0.2).addLoot('hexerei:belladonna_flower')
})