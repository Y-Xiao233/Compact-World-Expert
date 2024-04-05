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
        }]

    recipes.forEach(recipe =>{
        if(recipe.heated == "super"){
            event.recipes.create.mixing(recipe.output,recipe.input).superheated().id(recipe.id)
        }else if(recipe.heated == true){
            event.recipes.create.mixing(recipe.output,recipe.input).heated().id(recipe.id)
        }else if(recipe.heated == false){
            event.recipes.create.mixing(recipe.output,recipe.input).id(recipe.id)
        }
    })
})