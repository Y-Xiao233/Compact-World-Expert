ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/crystallizer/"

    const recipes = [
        {
            input:slurries('mekanism:clean_osmium',200),
            output:'mekanism:raw_osmium',
            id:'osmium'
        },
        {
            input:gases('mekanism:antimatter',25),
            output:'mekanism:pellet_antimatter',
            id:'pellet_antimatter'
        }]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.crystallizing(recipe.output,recipe.input).id(`${id_prefix}${recipe.id}`)
    })
})