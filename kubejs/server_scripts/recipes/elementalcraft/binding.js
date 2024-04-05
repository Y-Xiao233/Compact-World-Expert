ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/elementalcraft/binding/'
    /**
    {
     element_amount:,
     element_type:,
     input:[

     ],
     output:, //maxinput:20
     output_amount:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            element_amount:1000,
            element_type:"earth",
            input:[
            items('minecraft:kelp'),
            items('kubejs:gem_earth'),
            items('kubejs:bottle_water')],
            output:'minecraft:sugar_cane',
            output_amount:8,
            id:`${id_prefix}sugar_cane`
        },
        {
            element_amount:1000,
            element_type:'water',
            input:[
            items('ae2:fluix_block'),
            items('ae2:quartz_block'),
            items('ae2:semi_dark_monitor'),
            items('ae2:semi_dark_monitor'),
            items('ae2:semi_dark_monitor')],
            output:'ae2:storage_bus', //maxinput:20
            output_amount:3,
            id:`${id_prefix}storage_bus`
        },
        {
            element_amount:20000,
            element_type:'fire',
            input:[
            items('ae2:fluix_block'),
            items('industrialforegoing:machine_frame_pity'),
            items('elementalcraft:elementpipe_improved'),
            items('elementalcraft:purecrystal')
            ],
            output:'elementalcraft:reservoir_fire', //maxinput:20
            output_amount:1,
            id:`${id_prefix}reservoir_fire`
        },
        {
            element_amount:20000,
            element_type:'water',
            input:[
            items('ae2:fluix_block'),
            items('industrialforegoing:machine_frame_pity'),
            items('elementalcraft:elementpipe_improved'),
            items('elementalcraft:purecrystal')
            ],
            output:'elementalcraft:reservoir_water', //maxinput:20
            output_amount:1,
            id:`${id_prefix}reservoir_water`
        },
        {
            element_amount:20000,
            element_type:'earth',
            input:[
            items('ae2:fluix_block'),
            items('industrialforegoing:machine_frame_pity'),
            items('elementalcraft:elementpipe_improved'),
            items('elementalcraft:purecrystal')
            ],
            output:'elementalcraft:reservoir_earth', //maxinput:20
            output_amount:1,
            id:`${id_prefix}reservoir_earth`
        },
        {
            element_amount:20000,
            element_type:'air',
            input:[
            items('ae2:fluix_block'),
            items('industrialforegoing:machine_frame_pity'),
            items('elementalcraft:elementpipe_improved'),
            items('elementalcraft:purecrystal')
            ],
            output:'elementalcraft:reservoir_air', //maxinput:20
            output_amount:1,
            id:`${id_prefix}reservoir_air`
        },
        {
            element_amount:100,
            element_type:'earth',
            input:[
            {"type":"forge:nbt","item":'elementalcraft:container','nbt':'{BlockEntityTag:{element_storage:{element_amount:100000,element_capacity:100000,element_type:"fire"}}}'},
            {"type":"forge:nbt","item":'elementalcraft:container','nbt':'{BlockEntityTag:{element_storage:{element_amount:100000,element_capacity:100000,element_type:"earth"}}}'},
            {"type":"forge:nbt","item":'elementalcraft:container','nbt':'{BlockEntityTag:{element_storage:{element_amount:100000,element_capacity:100000,element_type:"air"}}}'},
            {"type":"forge:nbt","item":'elementalcraft:container','nbt':'{BlockEntityTag:{element_storage:{element_amount:100000,element_capacity:100000,element_type:"water"}}}'},
            items('elementalcraft:elementpipe_improved'),
            items('industrialforegoing:machine_frame_pity')
            ],
            output:'elementalcraft:elementpipe_creative', //maxinput:20
            output_amount:64,
            id:`${id_prefix}elementpipe_creative`
           }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"elementalcraft:binding",
            "element_amount":recipe.element_amount,
            "element_type":recipe.element_type,
            "ingredients":recipe.input,
            "output": {"item":recipe.output,"count":recipe.output_amount}
        })
    })
})