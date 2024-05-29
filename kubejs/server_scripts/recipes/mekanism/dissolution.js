ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/dissolution/"

    const recipes = [
        {
            output:gases('kubejs:pure_matter_gas',100),
            input_gas:gases('mekanism:steam',10),
            input_item:'kubejs:pure_matter_ball',
            id:'pure_matter_gas'
        },
        {
            output:slurries('mekanism:dirty_osmium',1000),
            input_gas:gases('mekanism:sulfuric_acid',1),
            input_item:'kubejs:end_osmium_ore',
            id:'dirty_osmium'
        }]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.dissolution(recipe.output,recipe.input_gas,recipe.input_item).id(`${id_prefix}${recipe.id}`)
    })
})