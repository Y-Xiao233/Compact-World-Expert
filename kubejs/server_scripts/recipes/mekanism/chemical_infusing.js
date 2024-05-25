ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/chemical_infusing/"

    const recipes = [
        {
            output:gases('kubejs:base_matter_gas',4),
            left_input:gases('kubejs:pure_matter_gas',2),
            right_input:gases('kubejs:tainted_matter_gas',2),
            id:'base_matter_gas'
        }]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.chemical_infusing(recipe.output,recipe.left_input,recipe.right_input).id(`${id_prefix}_${recipe.id}`)
    })
})