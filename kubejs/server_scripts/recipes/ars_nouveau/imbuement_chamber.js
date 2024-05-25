ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/ars_nouveau/imbuement_chamber/'
    /**
    {
     input:,
     output:,
     pedstalitems:[],
     source_cost:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            input:'kubejs:compact_ingot',
            output:'ars_nouveau:source_gem',
            pedstalitems:[],
            source_cost:50,
            id:`${id_prefix}source_gem_1`
        },
        {
            input:'kubejs:compact_block',
            output:'ars_nouveau:source_gem_block',
            pedstalitems:[],
            source_cost:50,
            id:`${id_prefix}source_gem_block_1`
        },
        {
            input:'kubejs:gold_rich_compact_wall',
            output:'minecraft:gold_ore',
            pedstalitems:[],
            source_cost:50,
            id:`${id_prefix}gold_ore`
        },
        {
            input:'elementalcraft:inert_crystal',
            output:'kubejs:blank_element_ball',
            pedstalitems:['kubejs:spherical_mold'],
            source_cost:50,
            id:`${id_prefix}blank_element_ball`
        },
        {
            input:'kubejs:trace_fire_element_ball',
            output:'elementalcraft:firecrystal',
            pedstalitems:['elementalcraft:swift_alloy_ingot','compressium:cobblestone_2','elementalcraft:contained_crystal'],
            source_cost:100,
            id:`${id_prefix}firecrystal`
        },
        {
            input:'botania:livingwood_planks',
            output:'ars_nouveau:archwood_planks',
            pedstalitems:['elementalcraft:swift_alloy_ingot','elementalcraft:firecrystal','ars_nouveau:source_gem_block'],
            source_cost:100,
            id:`${id_prefix}archwood_planks`
        },
        {
            input:'kubejs:imperfect_andesite_alloy',
            output:'2x create:andesite_alloy',
            pedstalitems:['elementalcraft:firecrystal','spirit:soul_powder_block','ars_nouveau:dominion_wand'],
            source_cost:200,
            id:`${id_prefix}andesite_alloy`
        },
        {
            input:'create:crushed_raw_gold',
            output:'kubejs:shining_gold_mix',
            pedstalitems:[],
            source_cost:50,
            id:`${id_prefix}shining_gold_mix`
        },
        {
            input:'naturesaura:infused_stone',
            output:'2x naturesaura:calling_spirit',
            pedstalitems:['naturesaura:token_joy','kubejs:gem_earth','kubejs:bottle_water'],
            source_cost:50,
            id:`${id_prefix}calling_spirit`
        },
        {
            input:'apotheosis:gem_dust',
            output:'4x ae2:certus_quartz_dust',
            pedstalitems:['create_crystal_clear:andesite_glass_casing','naturesaura:sky_ingot','apotheosis:mythic_material'],
            source_cost:100,
            id:`${id_prefix}certus_quartz_dust`
        },
        {
            input:'thermal:gold_dust',
            output:'8x minecraft:redstone',
            pedstalitems:['ae2:logic_processor','ae2:calculation_processor','ae2:engineering_processor','elementalcraft:firecrystal'],
            source_cost:1000,
            id:`${id_prefix}redstone`
        }]

    recipes.forEach(recipe =>{
        event.recipes.ars_nouveau.imbuement(recipe.input,recipe.output,recipe.source_cost,recipe.pedstalitems).id(recipe.id)

    })

})