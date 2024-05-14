ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/other_recipes/meltering/"

    /*
    {
     input:items(),
     output_fluid:fluids(),
     time:,
     id:''
    }
    */

    const recipes = [
        {
            input:items('minecraft:basalt'),
            output_fluid:fluids('minecraft:lava', 500),
            time:200,
            id:'lava'
        },
        {
            input:items('minecraft:coal'),
            output_fluid:fluids('kubejs:artificial_oil',100),
            time:200,
            id:'artificial_oil_from_coal'
        },
        {
            input:items('mekanism:enriched_carbon'),
            output_fluid:fluids('kubejs:artificial_oil',400),
            time:300,
            id:'artificial_oil_from_enriched_carbon'
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"melter:melting",
            "ingredient":recipe.input,
            "result":recipe.output_fluid,
            "processingTime":recipe.time
        }).id(`${id_prefix}${recipe.id}`)
    })
})