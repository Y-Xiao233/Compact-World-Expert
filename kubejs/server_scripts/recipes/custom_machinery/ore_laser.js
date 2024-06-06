ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/custom_machinery/ore_laser/'

    event.recipes.custommachinery.custom_machine('cwe:ore_laser',5000)
    .produceItem('minecraft:raw_iron').chance(0.8)
    .requireItem('industrialforegoing:laser_lens12').chance(0)
    .requireEnergy(1000)
    .id(`${id_prefix}raw_iron_from_ore_laser`)


    event.recipes.custommachinery.custom_machine('cwe:ore_laser',5000)
    .produceItem('minecraft:ancient_debris').chance(0.4)
    .produceItem('minecraft:netherite_scrap').chance(0.6)
    .produceItem('minecraft:netherite_ingot').chance(0.2)
    .produceItem('spirit:soul_steel_ingot').chance(0.06)
    .produceItem('minecraft:gold_ingot').chance(0.1)
    .produceItem('minecraft:iron_ingot').chance(0.08)
    .requireItem('kubejs:lens_of_blazing').chance(0)
    .requireEnergy(1000)
    .id(`${id_prefix}lens_of_blazing`)


    event.recipes.custommachinery.custom_machine('cwe:ore_laser',5000)
    .produceItem('kubejs:end_oil_ore').chance(0.6)
    .produceItem('kubejs:end_osmium_ore').chance(0.25)
    .produceItem('kubejs:end_quartz_ore').chance(0.25)
    .produceItem('minecraft:chorus_fruit').chance(0.05)
    .requireItem('powah:lens_of_ender').chance(0)
    .requireEnergy(1000)
    .id(`${id_prefix}lens_of_ender`)
})