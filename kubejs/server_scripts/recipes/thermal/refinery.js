ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/thermal/refinery/"

    const recipes = [
        {
            input:Fluid.of('thermal:crude_oil',100),
            output:['thermal:rosin',Fluid.of('thermal:light_oil',50),Fluid.of('thermal:heavy_oil',50)],
            energy:4000,
            id:'light_heavy_oil',
        }]

    recipes.forEach(recipe =>{
        event.recipes.thermal.refinery(recipe.output,recipe.input).energy(recipe.energy).id(`${id_prefix}${recipe.id}`)
    })
})