ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/mekanism/oxidizing/'


    const recipes = [
        {
            input:items('mekanism:pellet_antimatter'),
            output:gases('mekanism:antimatter',50),
            id:'antimatter_from_pellet'
        }]

    recipes.forEach(recipe => {
        event.custom({
            "type":"mekanism:oxidizing",
            "input":{"ingredient":recipe.input},
            "output":recipe.output
        }).id(`${id_prefix}${recipe.id}`)
    })
})