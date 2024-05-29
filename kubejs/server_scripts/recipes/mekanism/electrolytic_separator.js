ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/crystallizer/"

    const recipes = [
        {
            input:fluids('mekanism:lithium',10),
            left_output:gases('mekanismgenerators:deuterium'),
            right_output:gases('mekanismgenerators:tritium'),
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