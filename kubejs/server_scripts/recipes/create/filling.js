ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/create/filling/'
    /**
    {
     output:,
     fluid:,
     input:,
     id:
    }
    */
    const recipes = [
        {
            output:'malum:arcane_spirit',
            fluid:Fluid.of('starbunclemania:source_fluid',1000),
            input:Item.of('kubejs:spirit_press',{display:{Name:'{"text":"精魂压印模板--\u00a7c不消耗"}'}}).weakNBT(),
            id:'arcane_spirit'
        }]

    recipes.forEach(recipe =>{
        event.recipes.create.filling(recipe.output,[recipe.fluid,recipe.input]).id(`${id_prefix}${recipe.id}`)
    })
})