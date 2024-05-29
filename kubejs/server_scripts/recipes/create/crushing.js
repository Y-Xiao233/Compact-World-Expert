ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/create/crushing/"

    /**
    {
     output:[],
     input:,
     time:,
     id:`${id_prefix}`
    }
    */

    const recipes = [
        {
            output:['powah:uraninite',Item.of('powah:uraninite',2).withChance(0.8)],
            input:'powah:uraninite_ore_dense',
            time:10,
            id:`${id_prefix}uraninite`
        },
        {
            output:['create_new_age:thorium',Item.of('create_new_age:thorium',2).withChance(0.8)],
            input:'create_new_age:thorium_ore',
            time:10,
            id:`${id_prefix}thorium`
        },
        {
            output:['2x minecraft:lime_dye',Item.of('minecraft:lime_dye',2).withChance(0.6)],
            input:'botania:lime_petal',
            time:10,
            id:`${id_prefix}lime_dye`
        },
        {
            output:['2x minecraft:brown_dye',Item.of('minecraft:brown_dye',2).withChance(0.6)],
            input:'botania:brown_petal',
            time:10,
            id:`${id_prefix}brown_dye`
        },
        {
            output:['2x minecraft:blue_dye',Item.of('minecraft:blue_dye',2).withChance(0.6)],
            input:'botania:blue_petal',
            time:10,
            id:`${id_prefix}blue_dye`
        },
        {
            output:['kubejs:source_dust',Item.of('kubejs:source_dust',1).withChance(0.6)],
            input:'ars_nouveau:source_gem',
            time:10,
            id:`${id_prefix}source_dust`
        },
        {
            output:['2x minecraft:yellow_dye',Item.of('minecraft:yellow_dye',2).withChance(0.6)],
            input:'naturesaura:gold_leaf',
            time:10,
            id:`${id_prefix}yellow_dye`
        },
        {
            output:['createaddition:straw'],
            input:'thermal:cured_rubber',
            time:10,
            id:`${id_prefix}straw`
        },
        {
            output:[Item.of('vintageimprovements:vanadium_nugget').withChance(0.45),Item.of('vintageimprovements:vanadium_nugget').withChance(0.2)],
            input:'minecraft:basalt',
            time:10,
            id:`${id_prefix}vanadium_nugget`
        }]

    recipes.forEach(recipe => {
        event.recipes.create.crushing(recipe.output,recipe.input,recipe.time).id(recipe.id)
    })
})