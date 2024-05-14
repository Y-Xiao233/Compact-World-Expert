ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/industrialforegoing/laser_drill_ore/"

    /**
    {
     catalyst:,
     output:,
     id:''
    }
    */
    const reicpes = [
    {
        catalyst:'industrialforegoing:laser_lens12',
        output:'minecraft:raw_iron',
        rarity:[{
            "blacklist":{},
            "depth_max":255,
            "depth_min":0,
            "weight":1,
            "whitelist":{}
        }],
        id:''
    }]

    reicpes.forEach(recipe =>{
        event.recipes.industrialforegoing.laser_drill_ore(recipe.output,recipe.catalyst,recipe.rarity).id(`${id_prefix}${recipe.id}`)
    })
})