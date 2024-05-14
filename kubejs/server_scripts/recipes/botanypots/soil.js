ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/botanypots/soil/"
    /**
    {
     soil_block:,
     can_be_planted_on:,
     growth_ticks:,
     growth_modifier:,
     id:`${id_prefix}`
    }
    */
    const soils = [
        {
            soil_block:'spirit:soul_steel_block',
            can_be_planted_on:['tier_1'],
            growth_ticks:200,
            growth_modifier:1,
            id:`${id_prefix}soul_steel_block`
        },
        {
            soil_block:'botania:mana_diamond_block',
            can_be_planted_on:['basic_botania_mystical_flowers'],
            growth_ticks:200,
            growth_modifier:1,
            id:`${id_prefix}mana_diamond_block`
        },
        {
            soil_block:'psi:psimetal_block',
            can_be_planted_on:['oak_log'],
            growth_ticks:200,
            growth_modifier:1,
            id:`${id_prefix}psimetal_block`
        },
        {
            soil_block:'thermal:apatite_block',
            can_be_planted_on:['runewood'],
            growth_ticks:200,
            growth_modifier:1,
            id:`${id_prefix}apatite_block`
        },
        {
            soil_block:'compactmachines:machine_giant',
            can_be_planted_on:['advanced_botania_mystical_flowers'],
            growth_ticks:200,
            growth_modifier:1,
            id:`${id_prefix}machine_giant`
        }]

    soils.forEach(soil =>{
        event.recipes.botanypots.soil(soil.soil_block,{block:soil.soil_block},soil.can_be_planted_on,soil.growth_ticks,soil.growth_modifier).id(soil.id)
    })
})