ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/thermal/crucible/"

    /*
    {
     outout:Fluid.of(),
     input:,
     energy:,
     id:
    }
    */

    const recipes = [
        {
            output:Fluid.of('kubejs:molten_aqueous_spirit',500),
            input:'malum:aqueous_spirit',
            energy:4000,
            id:'molten_aqueous_spirit'
        }]

    recipes.forEach(recipe =>{
        event.recipes.thermal.crucible(recipe.output, recipe.input).energy(recipe.energy).id(`${id_prefix}${recipe.id}`)
    })
})