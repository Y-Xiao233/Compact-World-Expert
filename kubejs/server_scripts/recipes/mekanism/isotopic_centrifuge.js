ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/dissolution/"

    const recipes = [
        {
            output:gases('mekanism:polonium',1),
            input:gases('mekanism:fissile_fuel',10),
            id:'polonium'
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"mekanism:centrifuging",
            "input":recipe.input,
            "output":recipe.output
        }).id(`${id_prefix}${recipe.id}`)
    })
})