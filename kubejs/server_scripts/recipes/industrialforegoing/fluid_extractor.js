ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/industrialforegoing/fluid_extractor/"

    /**
    {
     input:,
     output_block:,
     chance:,
     output_fluid:,
     id:`${id_prefix}`
    }
    */
    const reicpes = [
        {
            input:'spirit:soul_steel_block',
            output_block:'spirit:compressed_soul_powder_block',
            output_fluid:Fluid.of('kubejs:liquid_soul',10),
            chance:0.01,
            id:`${id_prefix}liquid_soul`
        }]

    reicpes.forEach(recipe =>{
        event.recipes.industrialforegoing.fluid_extractor(recipe.input,recipe.output_block,recipe.chance,recipe.output_fluid).id(recipe.id)
    })
})