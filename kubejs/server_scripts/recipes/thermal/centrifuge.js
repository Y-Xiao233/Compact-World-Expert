ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/thermal/centrifuge/"

    const recipes = [
        {
            input:'kubejs:end_oil_ore',
            output:['thermal:coal_coke',Fluid.of('thermal:crude_oil',200)],
            energy:4000,
            id:'coal_coke_crude_oil',
        },
        {
            input:'thermal:rosin',
            output:[Item.of('thermal:rosin').withChance(0.3),Fluid.of('thermal:refined_fuel',100)],
            energy:4000,
            id:'refined_fuel',
        }]

    recipes.forEach(recipe =>{
        event.recipes.thermal.centrifuge(recipe.output,recipe.input).energy(recipe.energy).id(`${id_prefix}${recipe.id}`)
    })
})