ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/botanypots/soil/"
    /**
    {
     soul_block:,
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
            can_be_planted_on:['botania_flowers'],
            growth_ticks:200,
            growth_modifier:1,
            id:`${id_prefix}mana_diamond_block`
        }]

    soils.forEach(soil =>{
        event.recipes.botanypots.soil(soil.soil_block,{block:soil.soil_block},soil.can_be_planted_on,soil.growth_ticks,soil.growth_modifier).id(soil.id)
    })
})