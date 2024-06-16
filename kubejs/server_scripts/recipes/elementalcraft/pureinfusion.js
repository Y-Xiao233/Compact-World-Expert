ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/elementalcraft/pureinfusion/"

    /**
    {
     element_amount:,
     input:[
        items(), //center
        items(), //water
        items(), //fire
        items(), //earth
        items() //air
     ],
     output:items(),
     id:`${id_prefix}` 
    }
    */

    const recipes = [
        {
            element_amount:5000,
            input:[
                items('elementalcraft:firecrystal'), //center
                items('botania:mana_diamond'), //water
                items('create_new_age:blank_circuit'), //fire
                items('mekanismgenerators:fission_reactor_casing'), //earth
                items('botania:gaia_ingot') //air
            ],
            output:items('powah:dielectric_casing'),
            id:`${id_prefix}dielectric_casing`
        },
        {
            element_amount:5000,
            input:[
                items('elementalcraft:firecrystal'), //center
                items('botania:mana_diamond'), //water
                items('create_new_age:blank_circuit'), //fire
                items('elementalcraft:swift_alloy_block'), //earth
                items('mekanismgenerators:fission_reactor_port') //air
            ],
            output:items('mekanism:boiler_valve'),
            id:`${id_prefix}boiler_valve`
        },
        {
            element_amount:5000,
            input:[
               items('industrialforegoing:machine_frame_pity'), //center
               items('mekanism:basic_fluid_tank'), //water
               items('mekanism:pressure_disperser'), //fire
               items('create_new_age:blank_circuit'), //earth
               items('mekanism:basic_chemical_tank') //air
            ],
            output:items('mekanism:pressurized_reaction_chamber'),
            id:`${id_prefix}pressurized_reaction_chamber` 
           }]

    recipes.forEach((recipe) => {
        event.custom({
            "type": "elementalcraft:pureinfusion",
            "element_amount":recipe.element_amount,
            "ingredients":recipe.input,
            "output":recipe.output
        }).id(recipe.id)
    })
})