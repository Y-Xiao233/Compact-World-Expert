ServerEvents.recipes(event => {
    const id_prefix = "compact_world:recipes/mekanism/evaporating/"

    /*
    {
     input:fluids(),
     output:fluids(),
     id:''
    }
    */

    const recipes = [
        {
            input:fluids('kubejs:purewater',10),
            output:fluids('mekanism:brine',10),
            id:'brine'
        },
        {
            input:fluids('industrialforegoing:biofuel',10),
            output:fluids('mekanism:ethene',10),
            id:'ethene'
        }]

    recipes.forEach(recipe => {
        event.custom({
            "type":"mekanism:evaporating",
            "input":recipe.input,
            "output":recipe.output
        }).id(`${id_prefix}${recipe.id}`)
    })
})