ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/thermal/chiller/"

    const recipes = [
        {
            input:'thermal:chiller_ball_cast',
            fluid:Fluid.of('minecraft:water',1000),
            output:'4x minecraft:snowball',
            energy:500,
            id:'snowball'
        }]

    recipes.forEach(recipe =>{
        event.recipes.thermal.chiller(recipe.output,[recipe.fluid,recipe.input],0/*0 is xp*/,recipe.energy).id(`${id_prefix}${recipe.id}`)
    })
})