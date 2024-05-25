ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/malum/spirit_focusing/"

    /*
    {
     durabilityCost:,
     input:items(),
     output:items(),
     time:,
     spirits:[
        spirits()
     ],
     id:
    }
    */

    const recipes = [
        {
            durabilityCost:0,
            input:items('kubejs:tin_source'),
            output:items('thermal:tin_nugget',4),
            time:40,
            spirits:[
                spirits('arcane',2),
                spirits('aerial',2)
            ],
            id:'tin_nugget'
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"malum:spirit_focusing",
            "durabilityCost":recipe.durabilityCost,
            "input":recipe.input,
            "output":recipe.output,
            "spirits":recipe.spirits,
            "time":recipe.time,
        }).id(`${id_prefix}${recipe.id}`)
    })
})