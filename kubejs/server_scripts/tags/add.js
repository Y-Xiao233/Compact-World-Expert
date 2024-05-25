ServerEvents.tags('item', event => {
    event.add('cwe:tools/knives/psimetal','kubejs:psiknife')
    event.add('minecraft:coals','kubejs:source_psicoal')
    event.add('cwe:twig_wand',"botania:twig_wand")
    event.add('cwe:tools/shovel/swift_alloy','kubejs:swift_alloy_shovel')
    event.add('forge:sand','kubejs:swift_alloy_sand')
    event.add('cwe:runewood_item','malum:runewood_item_pedestal')
    event.add('cwe:runewood_item','malum:runewood_item_stand')
    event.add('cwe:mana_pool','botania:fabulous_pool')
    event.add('cwe:mana_pool','botania:creative_pool')
    event.add('cwe:mana_pool','botania:mana_pool')
    event.add('cwe:mana_pool','botania:diluted_pool')
    event.add('thermal:crafting/dies','kubejs:press_control_circuit_die')
})


ServerEvents.tags('block', event => {
    event.add('minecraft:needs_iron_tool','compactcrafting:field_projector')
    event.add('minecraft:mineable/pickaxe','compactcrafting:field_projector')
    event.add('cwe:mana_pool','botania:fabulous_pool')
    event.add('cwe:mana_pool','botania:creative_pool')
    event.add('cwe:mana_pool','botania:mana_pool')
    event.add('cwe:mana_pool','botania:diluted_pool')
})