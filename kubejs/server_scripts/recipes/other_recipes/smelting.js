ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/other_recipes/smelting/'

    const recipes = [
        {
            output:'minecraft:gold_ingot',
            input:'thermal:gold_dust',
            xp:0,
            time:100,
            id:`${id_prefix}gold_ingot`
        }]

    recipes.forEach(recipe => {
        event.recipes.minecraft.smelting(recipe.output,recipe.input,recipe.xp,recipe.time).id(recipe.id)  
    })
})