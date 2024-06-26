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
            can_be_planted_on:['botania_mystical_flowers_1'],
            output:[crops_outputs('botania:brown_mystical_flower',0.8,2,4)],
            growth_tick:200,
            growth_modifier:1,
            id:`${id_prefix}brown_mystical_flower`
        },
        {
            seed:'botania:lime_mystical_flower',
            can_be_planted_on:['botania_mystical_flowers_1'],
            output:[crops_outputs('botania:lime_mystical_flower',0.8,2,4)],
            growth_tick:200,
            growth_modifier:1,
            id:`${id_prefix}lime_mystical_flower`
        },
        {
            seed:'minecraft:oak_sapling',
            can_be_planted_on:['oak_log'],
            output:[crops_outputs('minecraft:oak_log',0.6,4,8),crops_outputs('minecraft:stick',0.2,2,4),crops_outputs('minecraft:oak_sapling',0.2,1,2),crops_outputs('minecraft:apple',0.2,1,2)],
            growth_tick:200,
            growth_modifier:1,
            id:`${id_prefix}wood_1`
        },
        {
            seed:'malum:runewood_sapling',
            can_be_planted_on:['runewood'],
            output:[crops_outputs('malum:runewood_log',0.6,2,4),crops_outputs('malum:runewood_sapling',0.2,1,2),crops_outputs('malum:runewood_leaves',0.4,2,4)],
            growth_tick:200,
            growth_modifier:1,
            id:`${id_prefix}runewood`
        },
        {
            seed:'botania:blue_mystical_flower',
            can_be_planted_on:['botania_mystical_flowers_2'],
            output:[crops_outputs('botania:blue_mystical_flower',0.8,2,4)],
            growth_tick:200,
            growth_modifier:1,
            id:`${id_prefix}blue_mystical_flower`
        },
        {
            seed:'botania:purple_mystical_flower',
            can_be_planted_on:['botania_mystical_flowers_3'],
            output:[crops_outputs('botania:purple_mystical_flower',0.8,2,4)],
            growth_tick:200,
            growth_modifier:1,
            id:`${id_prefix}purple_mystical_flower`
        },
        {
            seed:'botania:orange_mystical_flower',
            can_be_planted_on:['botania_mystical_flowers_3'],
            output:[crops_outputs('botania:orange_mystical_flower',0.8,2,4)],
            growth_tick:200,
            growth_modifier:1,
            id:`${id_prefix}orange_mystical_flower`
        },
        {
            seed:'botania:red_mystical_flower',
            can_be_planted_on:['botania_mystical_flowers_3'],
            output:[crops_outputs('botania:red_mystical_flower',0.8,2,4)],
            growth_tick:200,
            growth_modifier:1,
            id:`${id_prefix}red_mystical_flower`
        },
        {
            seed:'botania:black_mystical_flower',
            can_be_planted_on:['botania_mystical_flowers_4'],
            output:[crops_outputs('botania:black_mystical_flower',0.8,2,4)],
            growth_tick:200,
            growth_modifier:1,
            id:`${id_prefix}black_mystical_flower`
        },
        {
            seed:'minecraft:sugar_cane',
            can_be_planted_on:['tier_2'],
            output:[crops_outputs('minecraft:sugar_cane',0.8,2,3)],
            growth_tick:200,
            growth_modifier:1,
            id:`${id_prefix}sugar_cane`
        },
        {
            seed:'minecraft:oak_sapling',
            can_be_planted_on:['tier_2'],
            output:[crops_outputs('minecraft:oak_log',0.8,8,10),crops_outputs('minecraft:stick',0.2,2,4),crops_outputs('minecraft:oak_sapling',0.2,1,2)],
            growth_tick:100,
            growth_modifier:1,
            id:`${id_prefix}wood_2`
        },
        {
            seed:'minecraft:oak_sapling',
            can_be_planted_on:['oak_plank'],
            output:[crops_outputs('minecraft:oak_planks',0.9,15,40)],
            growth_tick:100,
            growth_modifier:1,
            id:`${id_prefix}oak_plank`
        }]

    crops.forEach(crop => {
      event.recipes.botanypots.crop(crop.seed,crop.can_be_planted_on,{block:crop.seed},crop.output,crop.growth_tick,crop.growth_modifier).id(crop.id)
    })
})