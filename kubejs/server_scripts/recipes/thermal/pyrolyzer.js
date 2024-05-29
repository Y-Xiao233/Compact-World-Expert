ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/thermal/pyrolyzer/"

    const recipes = [
        {
            input:'minecraft:sculk',
            output:['3x minecraft:echo_shard',Fluid.of('cyclic:xpjuice',100)],
            energy:4000,
            id:'echo_shard',
        }]

    recipes.forEach(recipe =>{
        event.recipes.thermal.pyrolyzer(recipe.output,recipe.input).energy(recipe.energy).id(`${id_prefix}${recipe.id}`)
    })
})