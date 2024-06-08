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
                "ingredients": [items('spirit:soul_steel_ingot'),items('botania:rune_water')],
                "keepHeldItem":true,
                "results": [items('spirit:soul_steel_ingot')]
            },
            {
                "type": "create:filling",
                "ingredients": [items('spirit:soul_steel_ingot'),fluids('minecraft:water',250)],
                "results": [items('spirit:soul_steel_ingot')]
            },
            {
                "type":"create_new_age:energising",
                "energy_needed":1000,
                "ingredients":[items('spirit:soul_steel_ingot')],
                "results":[items('minecraft:iron_ingot',2)]
            }],
            id:`${id_prefix}iron_ingot_1`
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
        },
        {
            input:items('minecraft:diamond'),
            loops:1,
            output:items('create_new_age:overcharged_diamond'),
            main:[
                {
                    "type": "create:deploying",
                    "ingredients": [items('minecraft:diamond'),items('minecraft:redstone')],
                    "results": [items('minecraft:diamond')]
                },
                {
                    "type":"create_new_age:energising",
                    "energy_needed":2000,
                    "ingredients":[items('minecraft:diamond')],
                    "results":[items('create_new_age:overcharged_diamond')]
                }
            ],
            id:`${id_prefix}overcharged_diamond`
        },
        {
            input:items('minecraft:stone'),
            loops:1,
            output:items('powah:uraninite_ore_dense',4),
            transitionalItem:items('kubejs:incomplete_uraninite_ore_dense'),
            main:[
                {
                    "type": "create:deploying",
                    "ingredients": [items('minecraft:stone'),items('minecraft:lime_dye')],
                    "results": [items('kubejs:incomplete_uraninite_ore_dense')]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [items('kubejs:incomplete_uraninite_ore_dense'),items('create_new_age:overcharged_diamond')],
                    "results": [items('kubejs:incomplete_uraninite_ore_dense')]
                },
                {
                    "type":"create_new_age:energising",
                    "energy_needed":10000,
                    "ingredients":[items('kubejs:incomplete_uraninite_ore_dense')],
                    "results":[items('powah:uraninite_ore_dense',4)]
                }
            ],
            id:`${id_prefix}uraninite_ore_dense`
        },
        {
            input:items('minecraft:stone'),
            loops:1,
            output:items('create_new_age:thorium_ore',4),
            transitionalItem:items('kubejs:incomplete_thorium_ore'),
            main:[
                {
                    "type": "create:deploying",
                    "ingredients": [items('minecraft:stone'),items('minecraft:brown_dye')],
                    "results": [items('kubejs:incomplete_thorium_ore')]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [items('kubejs:incomplete_thorium_ore'),items('create_new_age:overcharged_diamond')],
                    "results": [items('kubejs:incomplete_thorium_ore')]
                },
                {
                    "type":"create_new_age:energising",
                    "energy_needed":10000,
                    "ingredients":[items('kubejs:incomplete_thorium_ore')],
                    "results":[items('create_new_age:thorium_ore',4)]
                }
            ],
            id:`${id_prefix}thorium_ore`
        },
        {
            input:items('create_new_age:radioactive_thorium'),
            loops:1,
            output:items('create_new_age:nuclear_fuel'),
            transitionalItem:items('create_new_age:incomplete_fuel'),
            main:[
                {
                    "type": "create:deploying",
                    "ingredients": [items('create_new_age:incomplete_fuel'),items('create_new_age:blank_circuit')],
                    "results": [items('create_new_age:incomplete_fuel')]
                },
                {
                    "type": "create:filling",
                    "ingredients": [items('create_new_age:incomplete_fuel'),fluids('kubejs:liquid_mana',100)],
                    "results": [items('create_new_age:incomplete_fuel')]
                },
                {
                    "type":"create_new_age:energising",
                    "energy_needed":10000,
                    "ingredients":[items('create_new_age:incomplete_fuel')],
                    "results":[items('create_new_age:incomplete_fuel')]
                },
                {
                    "type": "create:pressing",
                    "ingredients": [items('create_new_age:incomplete_fuel')],
                    "results": [items('create_new_age:nuclear_fuel')]
                }
            ],
            id:`${id_prefix}nuclear_fuel`
        },
        {
            input:items('minecraft:raw_iron'),
            loops:1,
            output:items('minecraft:iron_ingot',2),
            main:[
            {
                "type": "create:deploying",
                "ingredients": [items('minecraft:raw_iron'),items('botania:rune_water')],
                "keepHeldItem":true,
                "results": [items('minecraft:raw_iron')]
            },
            {
                "type": "create:deploying",
                "ingredients": [items('minecraft:raw_iron'),items('elementalcraft:drenched_iron_ingot')],
                "results": [items('minecraft:raw_iron')]
            },
            {
                "type": "create:filling",
                "ingredients": [items('minecraft:raw_iron'),fluids('minecraft:water',250)],
                "results": [items('minecraft:raw_iron')]
            },
            {
                "type":"create_new_age:energising",
                "energy_needed":8000,
                "ingredients":[items('minecraft:raw_iron')],
                "results":[items('minecraft:iron_ingot',2)]
            }],
            id:`${id_prefix}iron_ingot_2`
        },
        {
            input:items('quark:blank_rune'),
            loops:1,
            output:items('vintageimprovements:redstone_module'),
            transitionalItem:items('vintageimprovements:incomplete_redstone_module'),
            main:[
                {
                    "type":"create_new_age:energising",
                    "energy_needed":20000,
                    "ingredients":[items('quark:blank_rune')],
                    "results":[items('vintageimprovements:incomplete_redstone_module')]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [items('vintageimprovements:incomplete_redstone_module'),items('minecraft:redstone_block')],
                    "results": [items('vintageimprovements:incomplete_redstone_module')]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [items('vintageimprovements:incomplete_redstone_module'),items('minecraft:red_dye')],
                    "results": [items('vintageimprovements:redstone_module')]
                }
            ],
            id:`${id_prefix}redstone_module`
        },
        {
            input:items('create:polished_rose_quartz'),
            loops:1,
            output:items('createcasing:chorium_ingot'),
            main:[
                {
                    "type": "create:filling",
                    "ingredients": [items('create:polished_rose_quartz'),fluids('cyclic:xpjuice',1000)],
                    "results": [items('create:polished_rose_quartz')]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [items('create:polished_rose_quartz'),items('minecraft:netherite_block')],
                    "results": [items('create:polished_rose_quartz')]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [items('create:polished_rose_quartz'),items('quark:chorus_fruit_block')],
                    "results": [items('create:polished_rose_quartz')]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [items('create:polished_rose_quartz'),items('thermalendergy:stellarium_ingot')],
                    "results": [items('create:polished_rose_quartz')]
                },
                {
                    "type":"create_new_age:energising",
                    "energy_needed":1000000,
                    "ingredients":[items('create:polished_rose_quartz')],
                    "results":[items('createcasing:chorium_ingot')]
                },
       
            ],
            id:`${id_prefix}chorium_quartz`
        }]

    recipes.forEach(recipe =>{
        recipe.transitionalItem = (recipe.transitionalItem != null ? recipe.transitionalItem : recipe.input)
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