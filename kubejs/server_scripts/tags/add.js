ServerEvents.tags('item', event => {
    event.add('cwe:tools/knives/psimetal','kubejs:psiknife')
    event.add('minecraft:coals','kubejs:source_psicoal')
    event.add('cwe:twig_wand',"botania:twig_wand")
    event.add('cwe:tools/shovel/swift_alloy','kubejs:swift_alloy_shovel')
    event.add('forge:sand','kubejs:swift_alloy_sand')
})


ServerEvents.tags('block', event => {
    event.add('minecraft:needs_iron_tool','compactcrafting:field_projector')
    event.add('minecraft:mineable/pickaxe','compactcrafting:field_projector')
})