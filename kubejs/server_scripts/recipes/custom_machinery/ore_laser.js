ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/custom_machinery/ore_laser/'

    event.recipes.custommachinery.custom_machine('cwe:ore_laser',5000)
    .produceItem('minecraft:raw_iron').chance(0.85)
    .requireItem('industrialforegoing:laser_lens12').chance(0)
    .requireEnergy(1000)
    .id(`${id_prefix}raw_iron_from_ore_laser`)


    event.recipes.custommachinery.custom_machine('cwe:ore_laser',5000)
    .produceItem('minecraft:ancient_debris').chance(0.45)
    .produceItem('minecraft:netherite_scrap').chance(0.65)
    .produceItem('minecraft:netherite_ingot').chance(0.25)
    .produceItem('spirit:soul_steel_ingot').chance(0.05)
    .produceItem('minecraft:gold_ingot').chance(0.15)
    .produceItem('minecraft:iron_ingot').chance(0.03)
    .requireItem('kubejs:lens_of_blazing').chance(0)
    .requireEnergy(1000)
    .id(`${id_prefix}lens_of_blazing`)


    event.recipes.custommachinery.custom_machine('cwe:ore_laser',5000)
    .produceItem('kubejs:end_oil_ore').chance(0.65)
    .produceItem('kubejs:end_osmium_ore').chance(0.3)
    .produceItem('kubejs:end_quartz_ore').chance(0.3)
    .produceItem('minecraft:chorus_fruit').chance(0.08)
    .requireItem('powah:lens_of_ender').chance(0)
    .requireEnergy(1000)
    .id(`${id_prefix}lens_of_ender`)
})