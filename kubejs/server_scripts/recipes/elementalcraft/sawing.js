ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/elementalcraft/sawing/'

    const recipes = [
        {
            element_amount:1000,
            input:items('ars_nouveau:archwood_planks'),
            luck_ratio:0,
            output:items('ars_nouveau:blue_archwood_sapling'),
            id:`${id_prefix}blue_archwood_sapling`
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