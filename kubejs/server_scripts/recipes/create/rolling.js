ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/create/rolling/"

    /*
    {
     input:items(),
     output:items(),
     id:
    }
    */

    const recipes = [
        {
            input:items('thermal:tin_ingot'),
            output:items('kubejs:tin_rod',2),
            id:'tin_rod'
        },
        {
            input:items('kubejs:tin_rod'),
            output:items('kubejs:tin_spring'),
            id:'tin_spring'
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"createaddition:rolling",
            "input":recipe.input,
            "result":recipe.output
        }).id(`${id_prefix}${recipe.id}`)
    })
})