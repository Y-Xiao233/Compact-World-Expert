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