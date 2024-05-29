ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/powah/energizing/'

    /*
    {
     input:[
        items()
     ],
     output:items(),
     energy:,
     id:''
    }
    */

    const recipes = [
        {
            input:[
                items('industrialforegoing:machine_frame_pity'),
                items('naturesaura:token_euphoria'),
                items('minecraft:redstone_block'),
                items('create_new_age:blank_circuit')
            ],
            output:items('industrialforegoing:latex_processing_unit'),
            energy:12000,
            id:'latex_processing_unit'
        },
        {
            input:[
               items('industrialforegoing:machine_frame_simple'),
               items('compressium:coal_2'),
               items('thermal:cured_rubber_block'),
               items('botania:mana_diamond_block'),
               items('naturesaura:token_terror'),
               items('naturesaura:token_terror')
            ],
            output:items('industrialforegoing:ore_laser_base'),
            energy:40000,
            id:'ore_laser_base'
        },
        {
            input:[
               items('psi:ivory_psimetal'),
               items('mekanism:ingot_steel')
            ],
            output:items('powah:steel_energized',2),
            energy:100000,
            id:'steel_energized'
        },
        {
            input:[
               items('psi:ivory_psimetal_block'),
               items('thermal:machine_frame'),
               items('malum:eldritch_spirit'),
               items('quark:purple_rune'),
               items('create:mechanical_press')
            ],
            output:items('thermal:machine_press'),
            energy:100000,
            id:'machine_press'
        },
        {
            input:[
               items('psi:ivory_psimetal_block'),
               items('thermal:machine_frame'),
               items('malum:eldritch_spirit'),
               items('quark:purple_rune'),
               items('create:spout')
            ],
            output:items('thermal:machine_bottler'),
            energy:100000,
            id:'machine_bottler'
        },
        {
            input:[
               items('naturesaura:tainted_gold_block'),
               items('malum:the_device'),
               items('quark:purple_rune'),
               items('create:spout'),
               items('thermal:machine_frame')
            ],
            output:items('industrialforegoing:fluid_laser_base'),
            energy:100000,
            id:'fluid_laser_base'
        },
        {
            input:[
               items('malum:the_device'),
               items('mekanism:basic_chemical_tank'),
               items('mekanism:basic_chemical_tank'),
               items('kubejs:tin_spring'),
               items('powah:energized_steel_block')
            ],
            output:items('mekanism:chemical_infuser'),
            energy:100000,
            id:'chemical_infuser'
        },
        {
            input:[
               items('minecraft:blast_furnace'),
               items('psi:ebony_psimetal_block'),
               items('thermal:machine_frame'),
               items('minecraft:sea_lantern')
            ],
            output:items('thermal:machine_smelter'),
            energy:500000,
            id:'machine_smelter'
        },
        {
            input:[
               items('industrialforegoing:machine_frame_advanced'),
               items('thermalendergy:prismalium_block'),
               items('mekanism:basic_fluid_tank'),
               items('mekanism:elite_control_circuit')
            ],
            output:items('thermal:machine_crystallizer'),
            energy:500000,
            id:'machine_crystallizer'
        },
        {
            input:[
               items('industrialforegoing:machine_frame_advanced'),
               items('minecraft:sculk'),
               items('powah:capacitor_nitro')
            ],
            output:items('thermal:machine_refinery'),
            energy:1000000,
            id:'machine_refinery'
        },
        {
            input:[
               items('industrialforegoing:machine_frame_advanced'),
               items('mekanism:basic_chemical_tank'),
               items('mekanism:basic_fluid_tank'),
               items('powah:capacitor_nitro')
            ],
            output:items('mekanism:chemical_washer'),
            energy:1000000,
            id:'chemical_washer'
        },
        {
            input:[
               items('industrialforegoing:machine_frame_supreme'),
               items('mekanism:pellet_antimatter')
            ],
            output:items('mekanism:antiprotonic_nucleosynthesizer'),
            energy:10000000,
            id:'antiprotonic_nucleosynthesizer'
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "powah:energizing",
            "ingredients":recipe.input,
            "energy":recipe.energy,
            "result":recipe.output
        }).id(`${id_prefix}${recipe.id}`)
    })
})