ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/create/mixing/"
    /**
    {
     output:,
     input:[],
     heated:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            output:'2x ae2:fluix_dust',
            input:['ae2:certus_quartz_dust','apotheosis:epic_material',Fluid.of('minecraft:water',250)],
            heated:false,
            id:`${id_prefix}fluix_dust`
        },
        {
            output:'8x ae2:fluix_glass_cable',
            input:['2x ae2:quartz_fiber','4x ae2:fluix_crystal',Fluid.of('minecraft:water',250)],
            heated:false,
            id:`${id_prefix}fluix_glass_cable`
        },
        {
            output:'ae2:energy_acceptor',
            input:['8x naturesaura:infused_stone','ae2:fluix_block'],
            heated:false,
            id:`${id_prefix}energy_acceptor`
        },
        {
            output:'sophisticatedstorage:controller',
            input:['create:andesite_casing','ae2:fluix_block','ae2:quartz_block'],
            heated:false,
            id:`${id_prefix}sophisticatedstorage_controller`
        },
        {
            output:'3x ae2:quartz_fiber',
            input:['create:framed_glass','ae2:certus_quartz_dust',Fluid.of('minecraft:water',250)],
            heated:false,
            id:`${id_prefix}quartz_fiber`
        },
        {
            output:'4x elementalcraft:swift_alloy_ingot',
            input:['4x minecraft:gold_ingot',Fluid.of('minecraft:lava',250)],
            heated:false,
            id:`${id_prefix}swift_alloy_ingot`
        },
        {
            output:'create_new_age:radioactive_thorium',
            input:['2x create_new_age:thorium','2x powah:uraninite',Fluid.of('minecraft:lava',1000)],
            heated:"heated",
            id:`${id_prefix}radioactive_thorium`
        },
        {
            output:'powah:capacitor_hardened',
            input:['powah:capacitor_basic_large','powah:steel_energized',Fluid.of('kubejs:purewater',250)],
            heated:'heated',
            id:`${id_prefix}`
        },
        {
            output:Fluid.of('kubejs:liquid_tainted_matter',250),
            input:['naturesaura:tainted_gold'],
            heated:'heated',
            id:`${id_prefix}liquid_tainted_matter_1`
        },
        {
            output:'4x create:brass_ingot',
            input:['2x minecraft:copper_ingot','mekanism:alloy_infused'],
            heated:'heated',
            id:`${id_prefix}brass_ingot`
        },
        {
            output:'3x create_new_age:copper_circuit',
            input:['3x create_new_age:blank_circuit','3x minecraft:copper_ingot','mekanism:alloy_infused'],
            heated:'heated',
            id:`${id_prefix}copper_circuit`
        },
        {
            output:'kubejs:incomplete_crystal_blazing',
            input:['minecraft:blaze_rod'],
            heated:'superheated',
            id:`${id_prefix}incomplete_crystal_blazing`
        },
        {
            output:'2x powah:capacitor_niotic',
            input:['powah:capacitor_hardened','powah:crystal_niotic',Fluid.of('kubejs:molten_aqueous_spirit',250)],
            heated:'superheated',
            id:`${id_prefix}capacitor_niotic`
        }]

    recipes.forEach(recipe =>{
        if(recipe.heated == "superheated"){
            event.recipes.create.mixing(recipe.output,recipe.input).superheated().id(recipe.id)
        }else if(recipe.heated == 'heated'){
            event.recipes.create.mixing(recipe.output,recipe.input).heated().id(recipe.id)
        }else if(recipe.heated == false){
            event.recipes.create.mixing(recipe.output,recipe.input).id(recipe.id)
        }
    })
})