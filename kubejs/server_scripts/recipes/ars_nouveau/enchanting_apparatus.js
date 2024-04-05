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
            output:'cwe:element_motor',
            pedstalitems:['elementalcraft:swift_alloy_block','spirit:soul_powder_block','create:shaft'],
            source_cost:2000,
            id:`${id_prefix}element_motor`
        }]

    recipes.forEach(recipe =>{
        event.recipes.ars_nouveau.enchanting_apparatus(recipe.pedstalitems,recipe.input,recipe.output,recipe.source_cost).id(recipe.id)
    })
})