ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/natures_auar/offering/'
    /**
    {
     input:,
     start_item:,
     output:,
     output_amount:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            input:'kubejs:mana_powder',
            start_item:'naturesaura:calling_spirit',
            output:'naturesaura:sky_ingot',
            output_amount:2,
            id:`${id_prefix}sky_ingot`
        },
        {
            input:'naturesaura:sky_ingot',
            start_item:'naturesaura:calling_spirit',
            output:'botania:spark',
            output_amount:4,
            id:`${id_prefix}spark`
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"naturesaura:offering",
            "input":{"item":recipe.input},
            "start_item":{"item":recipe.start_item},
            "output":{"item":recipe.output,"count":recipe.output_amount}
        }).id(recipe.id)
    })
})