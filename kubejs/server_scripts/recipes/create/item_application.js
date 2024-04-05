ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/create/item_application/'
    /**
    {
     hand_item:,
     block:,
     output:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            hand_item:'create:andesite_alloy',
            block:'quark:smooth_soul_sandstone',
            output:'create:andesite_casing',
            id:`${id_prefix}andesite_casing`
        }]

    recipes.forEach(recipe =>{
        event.recipes.create.item_application(recipe.output,[recipe.block,recipe.hand_item]).id(recipe.id)
    })
})