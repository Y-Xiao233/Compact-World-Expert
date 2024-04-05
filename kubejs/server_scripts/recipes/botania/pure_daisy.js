ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/botania/pure_daisy/'
    /**
    {
     output:,
     input:,
     time:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            output:'botania:livingwood_log',
            input:'compactmachines:wall',
            time:10,
            id:`${id_prefix}`
        },
        {
            output:'botania:livingrock',
            input:'minecraft:polished_andesite',
            time:10,
            id:`${id_prefix}livingrock`
        }]
    
    recipes.forEach(recipe =>{
        event.recipes.botania.pure_daisy(recipe.output,recipe.input,recipe.time).id(recipe.id)
    })
})