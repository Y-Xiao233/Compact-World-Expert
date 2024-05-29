ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/create/pressing/'
    /**
    {
     input:,
     output:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            input:'ars_nouveau:archwood_planks',
            output:'ars_nouveau:ritual_flight',
            id:`${id_prefix}ritual_flight`
        },
        {
            input:'farmersdelight:canvas',
            output:'ars_nouveau:blank_glyph',
            id:`${id_prefix}blank_glyph`
        },
        {
            input:'create:andesite_alloy',
            output:'kubejs:andesite_alloy_sheet',
            id:`${id_prefix}andesite_alloy_sheet_from_andesite_alloy`
        },
        {
            input:'minecraft:dried_kelp',
            output:'create:belt_connector',
            id:`${id_prefix}belt_connector`
        },
        {
            input:'spirit:soul_steel_ingot',
            output:'kubejs:soul_steel_sheet',
            id:`${id_prefix}soul_steel_sheet`
        },
        {
            input:'mekanism:ingot_steel',
            output:'quark:blank_rune',
            id:`${id_prefix}blank_rune`
        },
        {
            input:'minecraft:netherite_block',
            output:'kubejs:press_control_circuit_die',
            id:`${id_prefix}press_control_circuit_die`
        },
        {
            input:'thermal:enderium_block',
            output:'powah:lens_of_ender',
            id:`${id_prefix}lens_of_ender`
        }]

    recipes.forEach(recipes =>{
        event.recipes.create.pressing(recipes.output,recipes.input).id(recipes.id)
    })
})