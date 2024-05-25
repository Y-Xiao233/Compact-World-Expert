ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/crushing/"

    /*
    {
     output:,
     inpput:,
     id:
    }
    */

    const recipes = [
        {
            output:'minecraft:red_dye',
            input:'botania:red_petal',
            id:'red_dye'
        }]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.crushing(recipe.output,recipe.input).id(`${id_prefix}${recipe.id}`)
    })
})