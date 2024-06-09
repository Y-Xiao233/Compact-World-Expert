ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/electrolytic_separator/"

    const recipes = [
        {
            input:fluids('mekanism:lithium',10),
            left_output:gases('mekanismgenerators:deuterium',5),
            right_output:gases('mekanismgenerators:tritium',5),
            id:'lithium'
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"mekanism:separating",
            "input":recipe.input,
            "leftGasOutput":recipe.left_output,
            "rightGasOutput":recipe.right_output
        }).id(`${id_prefix}${recipe.id}`)
    })
})