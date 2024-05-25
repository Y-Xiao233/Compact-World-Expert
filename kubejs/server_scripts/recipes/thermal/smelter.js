ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/thermal/smelter/"

    /*
    {
     output:,
     input:[],
     energy:,
     id:
    }
    */

    const recipes = [
        {
            output:'psi:ebony_psimetal',
            input:['psi:ivory_psimetal','psi:ebony_substance'],
            energy:4000,
            id:'ebony_psimetal_2'
        },
        {
            output:Item.of('spirit:soul_crystal', '{StoredEntity:{Souls:64,Type:"minecraft:guardian"}}'),
            input:['spirit:soul_crystal','64x minecraft:sea_lantern'],
            energy:10000,
            id:'soul_crystal/guardian'
        },
        {
            output:'3x thermalendergy:prismalium_ingot',
            input:['minecraft:netherite_ingot','psi:ebony_psimetal','minecraft:sea_lantern'],
            energy:4000,
            id:'prismalium_ingot'
        },
        {
            output:'thermalendergy:endergy_upgrade_1',
            input:['thermal:upgrade_augment_3','3x thermalendergy:prismalium_ingot'],
            energy:8000,
            id:'thermalendergy_endergy_upgrade_1'
        }]

    recipes.forEach(recipe =>{
        event.recipes.thermal.smelter(recipe.output,recipe.input).energy(recipe.energy).id(`${id_prefix}${recipe.id}`)
    })
})