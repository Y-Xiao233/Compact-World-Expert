ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/botanypots/crop/"

    /**
    {
     seed:,
     can_be_planted_on:,
     output:,
     growth_tick:,
     growth_modifier:,
     id:`${id_prefix}`
    }
    */
    const crops = [
        {
            seed:'ars_nouveau:blue_archwood_sapling',
            can_be_planted_on:['tier_1'],
            output:[crops_outputs('ars_nouveau:blue_archwood_log',0.8,2,4),crops_outputs('ars_nouveau:blue_archwood_sapling',0.2,1,2)],
            growth_tick:200,
            growth_modifier:1,
            id:`${id_prefix}blue_archwood_sapling`
        },
        {
            seed:'botania:brown_mystical_flower',
            can_be_planted_on:['botania_flowers'],
            output:[crops_outputs('botania:brown_mystical_flower',0.8,2,4)],
            growth_tick:200,
            growth_modifier:1,
            id:`${id_prefix}brown_mystical_flower`
        },
        {
            seed:'botania:lime_mystical_flower',
            can_be_planted_on:['botania_flowers'],
            output:[crops_outputs('botania:lime_mystical_flower',0.8,2,4)],
            growth_tick:200,
            growth_modifier:1,
            id:`${id_prefix}lime_mystical_flower`
        }]

    crops.forEach(crop => {
      event.recipes.botanypots.crop(crop.seed,crop.can_be_planted_on,{block:crop.seed},crop.output,crop.growth_tick,crop.growth_modifier).id(crop.id)
    })
})