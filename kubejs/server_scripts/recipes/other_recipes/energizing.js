ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/other_recipes/energizing/'

    /**
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