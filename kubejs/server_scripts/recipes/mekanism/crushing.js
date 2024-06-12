ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/crushing/"

    /*
    {
     output:,
     input:,
     id:
    }
    */

    const recipes = [
        {
            output:'minecraft:red_dye',
            input:'botania:red_petal',
            id:'red_dye'
        },
        {
            output:'8x mekanism:substrate',
            input:'psi:ebony_substance',
            id:'substrate'
        },
        {
            output:'4x thermalendergy:stellarium_ingot',
            input:'thermalendergy:endergy_upgrade_3',
            id:'stellarium_ingot'
        },
        {
            output:'mekanism:dust_osmium',
            input:'mekanism:ingot_osmium',
            id:'dust_osmium'
        }
]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.crushing(recipe.output,recipe.input).id(`${id_prefix}${recipe.id}`)
    })
})