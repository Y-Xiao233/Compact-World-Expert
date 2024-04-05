ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/custom_machinery/mana_crush_machine/'
    
    event.recipes.custommachinery.custom_machine('cwe:mana_crush_machine',20)
    .requireMana(90)
    .requireItem('minecraft:gold_ore')
    .produceItem('minecraft:raw_gold').chance(0.8)
    .produceItem('minecraft:cobblestone')
    .id(`${id_prefix}raw_gold`)

    event.recipes.custommachinery.custom_machine('cwe:mana_crush_machine',20)
    .requireMana(100)
    .requireItem('ars_nouveau:source_gem')
    .produceItem('elementalcraft:inert_crystal').chance(0.8)
    .id(`${id_prefix}inert_crystal`)

    event.recipes.custommachinery.custom_machine('cwe:mana_crush_machine',20)
    .requireMana(100)
    .requireItem('hexerei:moon_dust')
    .produceItem('elementalcraft:source').chance(0.8)
    .produceItem('elementalcraft:inert_crystal').chance(0.2)
    .id(`${id_prefix}source`)

    event.recipes.custommachinery.custom_machine('cwe:mana_crush_machine',20)
    .requireMana(2000)
    .requireItem('minecraft:gold_block')
    .produceItem('kubejs:spherical_mold')
    .id(`${id_prefix}spherical_mold`)
})