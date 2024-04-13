ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/create/special_sequenced_assembly/basic/"

    /**
    {
     input:,
     loops:,
     output:,
     main:[

     ],
     id:`${id_prefix}`
    }
    */
   
    const recipes = [
        {
            input:items('spirit:soul_steel_ingot'),
            loops:1,
            output:items('minecraft:iron_ingot',2),
            main:[
            {
                "type": "create:deploying",
                "ingredients": [{"item":'spirit:soul_steel_ingot'},{"item":'botania:rune_water'}],
                "results": [{"item":'spirit:soul_steel_ingot'}]
            },
            {
                "type": "create:filling",
                "ingredients": [{"item":'spirit:soul_steel_ingot'},{"amount":250,"fluid":"minecraft:water","nbt":{}}],
                "results": [{"item":'spirit:soul_steel_ingot'}]
            },
            {
                "type":"create_new_age:energising",
                "energy_needed":1000,
                "ingredients":[{"item":'spirit:soul_steel_ingot'}],
                "results":[{"item":'minecraft:iron_ingot'}]
            }],
            id:`${id_prefix}iron_ingot`
        },
        {
            input:items('minecraft:iron_ingot'),
            loops:1,
            output:items('create_new_age:overcharged_iron'),
            main:[
                {
                    "type": "create:deploying",
                    "ingredients": [items('minecraft:iron_ingot'),items('minecraft:redstone')],
                    "results": [items('minecraft:iron_ingot')]
                },
                {
                    "type":"create_new_age:energising",
                    "energy_needed":2000,
                    "ingredients":[items('minecraft:iron_ingot')],
                    "results":[items('create_new_age:overcharged_iron')]
                }
            ],
            id:`${id_prefix}overcharged_iron`
        },
        {
            input:items('minecraft:gold_ingot'),
            loops:1,
            output:items('create_new_age:overcharged_gold'),
            main:[
                {
                    "type": "create:deploying",
                    "ingredients": [items('minecraft:gold_ingot'),items('minecraft:redstone')],
                    "results": [items('minecraft:gold_ingot')]
                },
                {
                    "type":"create_new_age:energising",
                    "energy_needed":2000,
                    "ingredients":[items('minecraft:gold_ingot')],
                    "results":[items('create_new_age:overcharged_gold')]
                }
            ],
            id:`${id_prefix}overcharged_gold`
        },
        {
            input:items('naturesaura:token_fear'),
            loops:1,
            output:items('naturesaura:token_terror'),
            main:[
                {
                    "type": "create:deploying",
                    "ingredients": [items('naturesaura:token_fear'),items('botania:terrasteel_nugget')],
                    "results": [items('naturesaura:token_fear')]
                },
                {
                    "type":"create_new_age:energising",
                    "energy_needed":2500,
                    "ingredients":[items('naturesaura:token_fear')],
                    "results":[items('naturesaura:token_terror')]
                }
            ],
            id:`${id_prefix}token_terror`
        }]

    recipes.forEach(recipe =>{
        recipe.transitionalItem = recipe.input
        event.custom({
            "type":"create:sequenced_assembly",
            "ingredient":[recipe.input],
            "loops":recipe.loops,
            "results":[recipe.output],
            "sequence":recipe.main,
            "transitionalItem":recipe.transitionalItem
        }).id(recipe.id)        
    })
})