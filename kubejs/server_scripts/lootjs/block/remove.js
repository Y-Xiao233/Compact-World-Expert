LootJS.modifiers((event) => {
    event.addBlockLootModifier('naturesaura:golden_leaves').removeLoot('naturesaura:gold_leaf')
    event.addBlockLootModifier('minecraft:gold_ore').removeLoot('minecraft:raw_gold').removeLoot('minecraft:gold_ingot')
    event.addBlockLootModifier('minecraft:deepslate_gold_ore').removeLoot('minecraft:raw_gold').removeLoot('minecraft:gold_ingot')
})