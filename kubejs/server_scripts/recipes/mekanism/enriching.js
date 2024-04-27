ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/mekanism/enriching/'

    /**
    {
     input:,
     output:,
     id:`${id_prefix}`
    }
    */

    const recipes = [
        {
            input:'kubejs:soul_steel_sheet',
            output:'kubejs:enriched_soul_steel',
            id:`${id_prefix}enriched_soul_steel`
        },
        {
            input:'minecraft:raw_gold',
            output:'3x create:crushed_raw_gold',
            id:`${id_prefix}crushed_raw_gold`
        },
        {
            input:Item.of('kubejs:incomplete_craftpurecrystal','{SequencedAssembly:{Progress:0.4f,Step:2,id:"compact_world:recipes/create/special_sequenced_assembly/special/purecrystal"}}').weakNBT(),
            output:Item.of('kubejs:incomplete_craftpurecrystal','{SequencedAssembly:{Progress:0.6f,Step:3,id:"compact_world:recipes/create/special_sequenced_assembly/special/purecrystal"}}'),
            id:`${id_prefix}purecrystal_step_3`
        },
        {
            input:'botania:terrasteel_nugget',
            output:'kubejs:enriched_terra',
            id:`${id_prefix}enriched_terra`
        },
        {
            input:'minecraft:coal',
            output:'mekanism:enriched_carbon',
            id:`${id_prefix}enriched_carbon`
        }]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.enriching(recipe.output,recipe.input).id(recipe.id)
    })
})