ServerEvents.recipes(event =>{
    const recipes = [
        {
            input:'elementalcraft:swift_alloy_ingot',
            pattern:[
                [" B ","B@B"," B "],
                ["AAA","A&A","AAA"]
            ],
            keys:{
                "A":{"block":'compactmachines:wall'},
                "B":{"block":'kubejs:projector_dish'}
            },
            duration:20,
            destroysStructure:true,
            output:'compactcrafting:field_projector',
            output_amount:4
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"spirit:soul_engulfing",
            "input":{"ingredient": {"item":recipe.input},"multiblock": {"pattern":recipe.pattern,"keys":recipe.keys}},
            "duration":recipe.duration,
            "destroysStructure":recipe.destroysStructure,
            "outputItem":recipe.output,
            "outputAmount":recipe.output_amount
        })
    })

    event.custom({
        "type":"spirit:soul_engulfing",
        "input":{"ingredient":{"item": 'minecraft:flint'}},
        "duration":2,
        "destroysStructure":false,
        "outputItem":"spirit:soul_powder",
        "outputAmount":2
    })
})