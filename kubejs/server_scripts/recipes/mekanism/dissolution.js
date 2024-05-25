ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/dissolution/"

    const recipes = [
        {
            output_gas:gases('kubejs:pure_matter_gas',100),
            input_gas:gases('mekanism:steam',10),
            input_item:'kubejs:pure_matter_ball',
            id:'pure_matter_gas'
        }]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.dissolution(recipe.output_gas,recipe.input_gas,recipe.input_item).id(`${id_prefix}_${recipe.id}`)
    })
})