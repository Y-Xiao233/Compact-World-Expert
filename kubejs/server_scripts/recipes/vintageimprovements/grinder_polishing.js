ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/vintageimprovements/grinder_polishing/"

    /**
    {
     speed_limit:,
     input:[items()],
     output:[items()],
     time:,
     id:''
    }
    */

    const recipes = [
        {
            speed_limit:3,
            input:[items('minecraft:lapis_ore')],
            output:[items('minecraft:lapis_lazuli',6)],
            time:10,
            id:'lapis_lazuli'
        },
        {
            speed_limit:3,
            input:[items('kubejs:raw_enriched_iron')],
            output:[items('mekanism:enriched_iron')],
            time:10,
            id:'enriched_iron'
        },
        {
            speed_limit:3,
            input:[items('kubejs:end_quartz_ore')],
            output:[items('minecraft:quartz',2)],
            time:10,
            id:'quartz'
        },
        {
            speed_limit:3,
            input:[items('mekanism:raw_osmium')],
            output:[items('mekanism:ingot_osmium')],
            time:10,
            id:'ingot_osmium'
        }]

    recipes.forEach((recipe) => {
        event.custom({
            "type":"vintageimprovements:polishing",
            "speed_limits":recipe.speed_limit,
            "ingredients":recipe.input,
            "results":recipe.output,
            "processingTime":recipe.time
        }).id(`${id_prefix}${recipe.id}`)
    })
})