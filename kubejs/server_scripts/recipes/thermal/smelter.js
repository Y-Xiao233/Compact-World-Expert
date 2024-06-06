ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/thermal/smelter/"

    /*
    {
     output:,
     input:[],
     energy:,
     id:
    }
    */

    const recipes = [
        {
            output:'psi:ebony_psimetal',
            input:['psi:ivory_psimetal','psi:ebony_substance'],
            energy:4000,
            id:'ebony_psimetal_2'
        },
        {
            output:Item.of('spirit:soul_crystal', '{StoredEntity:{Souls:64,Type:"minecraft:guardian"}}'),
            input:['spirit:soul_crystal','64x minecraft:sea_lantern'],
            energy:10000,
            id:'soul_crystal/guardian'
        },
        {
            output:'3x thermalendergy:prismalium_ingot',
            input:['minecraft:netherite_ingot','psi:ebony_psimetal','minecraft:sea_lantern'],
            energy:4000,
            id:'prismalium_ingot'
        },
        {
            output:'thermalendergy:endergy_upgrade_1',
            input:['thermal:upgrade_augment_3','3x thermalendergy:prismalium_ingot'],
            energy:8000,
            id:'thermalendergy_endergy_upgrade_1'
        },
        {
            output:'4x mekanism:thermal_evaporation_block',
            input:['4x minecraft:bricks','4x minecraft:copper_ingot'],
            energy:8000,
            id:'thermal_evaporation_block'
        },
        {
            output:'mekanism:thermal_evaporation_controller',
            input:['mekanism:thermal_evaporation_block','2x thermalendergy:prismalium_ingot','2x mekanism:elite_control_circuit'],
            energy:8000,
            id:'thermal_evaporation_controller'
        },
        {
            output:'mekanism:thermal_evaporation_valve',
            input:['mekanism:thermal_evaporation_block','2x mekanism:elite_control_circuit','minecraft:bucket'],
            energy:8000,
            id:'thermal_evaporation_valve'
        },
        {
            output:'4x thermal:enderium_ingot',
            input:['2x minecraft:echo_shard','thermalendergy:prismalium_ingot','vintageimprovements:vanadium_ingot'],
            energy:12000,
            id:'enderium_ingot'
        },
        {
            output:'thermal:machine_centrifuge',
            input:['industrialforegoing:machine_frame_advanced','minecraft:netherite_block','powah:capacitor_nitro'],
            energy:40000,
            id:'machine_centrifuge'
        },
        {
            output:'mekanism:electrolytic_separator',
            input:['industrialforegoing:machine_frame_advanced','mekanism:electrolytic_core','2x mekanism:ultimate_control_circuit'],
            energy:40000,
            id:'electrolytic_separator'
        },
        {
            output:'mekanism:isotopic_centrifuge',
            input:['industrialforegoing:machine_frame_supreme','mekanism:ingot_refined_obsidian'],
            energy:40000,
            id:'isotopic_centrifuge'
        },
        {
            output:'ae2:creative_item_cell',
            input:['kubejs:creative_cell_housing','4x kubejs:light_ingot','4x mekanism:pellet_antimatter'],
            energy:400000,
            id:'creative_item_cell'
        },
        {
            output:'kubejs:creative_cell_housing',
            input:['64x compactmachines:solid_wall','4x createcasing:creative_casing','ae2:item_cell_housing'],
            energy:400000,
            id:'creative_cell_housing'
        }]

    recipes.forEach(recipe =>{
        event.recipes.thermal.smelter(recipe.output,recipe.input).energy(recipe.energy).id(`${id_prefix}${recipe.id}`)
    })
})