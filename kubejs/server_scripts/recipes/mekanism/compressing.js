ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/compressing/"

    const recipes = [
        {
            input_gas:gases('mekanism:osmium'),
            input_item:'thermal:tar',
            output:'kubejs:ingot_refined_tar',
            id:'ingot_refined_tar'
        },
        {
            input_gas:gases('mekanism:osmium'),
            input_item:'create:powdered_obsidian',
            output:'mekanism:dust_refined_obsidian',
            id:'dust_refined_obsidian'
        }]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.compressing(recipe.output,recipe.input_item,recipe.input_gas).id(`${id_prefix}${recipe.id}`)
    })
})