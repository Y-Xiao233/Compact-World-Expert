ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/ars_nouveau/fluid_sourcelink/"

    /**
    {
     fluid:,
     ratio:,
     id:`${id_prefix}`
    }
    */

    const recipes = [
        {
            fluid:'kubejs:liquid_mana',
            ratio:8.0,
            id:`${id_prefix}liquid_mana_to_source`
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"starbunclemania:fluid_sourcelink",
            "fluid":recipe.fluid,
            "mb_to_source_ratio":recipe.ratio
        }).id(recipe.id)
    })
})