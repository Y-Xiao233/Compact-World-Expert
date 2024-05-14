LootJS.modifiers((event) => {
    event.addBlockLootModifier('naturesaura:golden_leaves').removeLoot('naturesaura:gold_leaf')
    event.addBlockLootModifier('minecraft:gold_ore').removeLoot('minecraft:raw_gold').removeLoot('minecraft:gold_ingot')
    event.addBlockLootModifier('minecraft:deepslate_gold_ore').removeLoot('minecraft:raw_gold').removeLoot('minecraft:gold_ingot')
    event.addBlockLootModifier('powah:uraninite_ore_dense').removeLoot('powah:uraninite').removeLoot('powah:uraninite_raw')
    event.addBlockLootModifier('create_new_age:thorium_ore').removeLoot('create_new_age:thorium')
    event.addBlockLootModifier('minecraft:lapis_ore').removeLoot('minecraft:lapis_lazuli')
})