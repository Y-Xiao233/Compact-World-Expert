ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/elementalcraft/sawing/'

    /**
    {
     element_amount:,
     input:,
     luck_ratio:,
     output:,
     id:`${id_prefix}`
    }
    */

    const recipes = [
        {
            element_amount:1000,
            input:items('ars_nouveau:archwood_planks'),
            luck_ratio:0,
            output:items('ars_nouveau:blue_archwood_sapling'),
            id:`${id_prefix}blue_archwood_sapling`
        },
        {
            element_amount:1000,
            input:items('thermal:apatite'),
            luck_ratio:0,
            output:items('malum:aerial_spirit',4),
            id:`${id_prefix}aerial_spirit`
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "elementalcraft:sawing",
            "element_amount":recipe.element_amount,
            "input":recipe.input,
            "luck_ratio":recipe.luck_ratio,
            "output":recipe.output
        }).id(recipe.id)
    })
})