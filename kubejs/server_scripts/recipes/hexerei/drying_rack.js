ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/hexerei/drying_rack/'
    /**
    {
     input:,
     output:,
     time:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            input:"hexerei:sage_bundle",
            output:"hexerei:dried_sage_bundle",
            time:100,
            id:`${id_prefix}dried_sage_bundle`
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"hexerei:drying_rack",
            "ingredients": [{"item":recipe.input}],
            "output": {"item":recipe.output},
            "dryingTimeInTicks":recipe.time
        }).id(recipe.id)
    })
})