ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/thermal/bottler/"

    /*
    {
     output:,
     input_item:,
     input_fluid:Fluid.of(),
     energy:,
     id:
    }
    */

    const recipes = [
        {
            output:'kubejs:lens_of_tainted',
            input_item:'kubejs:lens_of_blank',
            input_fluid:Fluid.of('kubejs:liquid_tainted_matter',1000),
            energy:10000,
            id:'ivory_psimetal'
        },
        {
            output:'mekanism:alloy_infused',
            input_item:'kubejs:blank_alloy_infused',
            input_fluid:Fluid.of('thermal:redstone',250),
            energy:1000,
            id:'alloy_infused'
        },
        {
            output:'create_new_age:reactor_casing',
            input_item:'minecraft:bricks',
            input_fluid:Fluid.of('hexerei:quicksilver_fluid',500),
            energy:4000,
            id:'reactor_casing'
        },
        {
            output:'powah:crystal_niotic',
            input_item:'kubejs:blank_diamond_crystal_niotic',
            input_fluid:Fluid.of('kubejs:molten_aqueous_spirit',250),
            energy:400,
            id:'diamond_crystal_niotic'
        }]

    recipes.forEach(recipe =>{
        event.recipes.thermal.bottler(recipe.output,[recipe.input_item,recipe.input_fluid]).energy(recipe.energy).id(`${id_prefix}${recipe.id}`)
    })
})