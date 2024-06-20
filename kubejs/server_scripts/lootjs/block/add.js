LootJS.modifiers((event) => {
    event.addBlockLootModifier('minecraft:grass').randomChance(0.2).addLoot('hexerei:belladonna_flower')
    event.addBlockLootModifier('minecraft:tall_grass').randomChance(0.2).addLoot('hexerei:belladonna_flower')
    event.addBlockLootModifier('powah:uraninite_ore_dense').addLoot('powah:uraninite_ore_dense')
    event.addBlockLootModifier('create_new_age:thorium_ore').addLoot('create_new_age:thorium_ore')
    event.addBlockLootModifier('minecraft:lapis_ore').addLoot('minecraft:lapis_ore')
    event.addBlockLootModifier('minecraft:gold_ore').addLoot('minecraft:gold_ore')
    event.addBlockLootModifier('spirit:compressed_soul_powder_block').addLoot('spirit:compressed_soul_powder_block')
})