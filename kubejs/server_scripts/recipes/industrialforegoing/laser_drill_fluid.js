ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/industrialforegoing/laser_drill_fluid/"

    /**
    {
     catalyst:,
     output:,
     id:''
    }
    */
    const reicpes = [
    {
        catalyst:'kubejs:lens_of_tainted',
        output:Fluid.of('kubejs:liquid_tainted_matter',200),
        rarity:{
            "whitelist":{},
            "blacklist":{},
            "depth_max":255,
            "depth_min":0,
            "weight":1
        },
        entity_bleow:"minecraft:empty",
        id:'liquid_tainted_matter_2'
    }]

    reicpes.forEach(recipe =>{
        event.recipes.industrialforegoing.laser_drill_fluid(recipe.output,recipe.catalyst,recipe.rarity,recipe.entity_bleow).id(`${id_prefix}${recipe.id}`)
    })
})