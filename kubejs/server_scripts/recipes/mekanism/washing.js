ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/washing/"

    const recipes = [
        {
            input_fluid:fluids('kubejs:purewater',5),
            input_slurry:slurries('mekanism:dirty_osmium'),
            output:slurries('mekanism:clean_osmium'),
            id:'clean_osmium'
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"mekanism:washing",
            "fluidInput":recipe.input_fluid,
            "output":recipe.output,
            "slurryInput":recipe.input_slurry
        }).id(`${id_prefix}${recipe.id}`)
    })
})