ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/other_recipes/smelting/'

    const recipes = [
        {
            output:'minecraft:gold_ingot',
            input:'thermal:gold_dust',
            id:`${id_prefix}gold_ingot`
        }]

    recipes.forEach(recipe => {
        event.smelting(recipe.output,recipe.input).id(recipe.id)  
    })
})