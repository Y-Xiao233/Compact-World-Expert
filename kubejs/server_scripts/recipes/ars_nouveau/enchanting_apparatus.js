ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/ars_nouveau/enchanting_apparatus/'
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
            input:'ars_nouveau:sourcestone',
            output:'2x create:large_water_wheel',
            pedstalitems:['elementalcraft:swift_alloy_block','spirit:soul_powder_block','create:shaft','elementalcraft:firecrystal_block'],
            source_cost:2000,
            id:`${id_prefix}large_water_wheel`
        },
        {
            input:'elementalcraft:swift_alloy_ingot',
            output:'apotheosis:mythic_material',
            pedstalitems:['ars_nouveau:source_gem','spirit:soul_powder','ars_nouveau:sourcestone'],
            source_cost:2000,
            id:`${id_prefix}mythic_material`
        }]

    recipes.forEach(recipe =>{
        event.recipes.ars_nouveau.enchanting_apparatus(recipe.pedstalitems,recipe.input,recipe.output,recipe.source_cost).id(recipe.id)
    })
})