ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/antiprotonic_nucleosynthesizer/"

    const recipes = [
        {
            input_gas_amount:2,
            input_item:items('thermalendergy:endergy_upgrade_2'),
            output:items('thermalendergy:endergy_upgrade_3'),
            duration:500,
            id:'thermalendergy_endergy_upgrade_3'
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"mekanism:nucleosynthesizing",
            "duration":500,
            "gasInput":{"amount":recipe.input_gas_amount,"gas":"mekanism:antimatter"},
            "itemInput":{"ingredient":recipe.input_item},
            "output":recipe.output
        }).id(`${id_prefix}${recipe.id}`)
    })
})