ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/combining/"

    /*
    {
     input:,
     output:,
     extra_input:,
     id:''
    }
    */

    const recipes = [
        {
            input:'psi:psimetal',
            output:'psi:ivory_psimetal',
            extra_input:'minecraft:bone',
            id:'ivory_psimetal'
        },
        {
            input:'botania:orange_petal',
            output:'2x minecraft:orange_dye',
            extra_input:'minecraft:white_dye',
            id:'orange_dye'
        },
        {
            input:'botania:purple_petal',
            output:'2x minecraft:purple_dye',
            extra_input:'minecraft:white_dye',
            id:'purple_dye'
        },
        {
            input:'kubejs:bottle_water',
            output:Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
            extra_input:'malum:eldritch_spirit',
            id:'aura_bottle_contain_nether'
        },
        {
            input:'powah:energizing_rod_hardened',
            output:'powah:energizing_rod_niotic',
            extra_input:'powah:capacitor_niotic',
            id:'energizing_rod_niotic'
        },
        {
            input:Item.of('minecraft:netherite_scrap',2),
            output:'minecraft:netherite_ingot',
            extra_input:Item.of('elementalcraft:swift_alloy_ingot',4),
            id:'netherite_ingot'
        },
        {
            input:'psi:ivory_psimetal',
            output:'psi:ebony_psimetal',
            extra_input:Item.of('psi:ebony_substance',2),
            id:'ebony_psimetal_1'
        },
        {
            input:'compressium:stone_1',
            output:'3x minecraft:sculk',
            extra_input:Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}').weakNBT(),
            id:'sculk'
        },
        {
            input:'botania:light_gray_petal',
            output:'2x minecraft:light_gray_dye',
            extra_input:'minecraft:white_dye',
            id:'light_gray_dye'
        }]

    recipes.forEach((recipe) => {
        event.recipes.mekanism.combining(recipe.output,recipe.input,recipe.extra_input).id(`${id_prefix}${recipe.id}`)
    })
})