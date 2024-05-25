ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/compactcrafting/compactcrafting/"
    /**
    {
     recipesize:,
     layer:[
        compactcrafting()
     ],
     catalyst:,
     components:{
        "A":component()
     },
     output:,
     output_amount:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            recipesize:5,
            layer:[
                compactcrafting(5,["A","A","A","A","A"],["A","A","A","A","A"],["A","A","B","A","A"],["A","A","A","A","A"],["A","A","A","A","A"]),
                compactcrafting(5,["C","C","C","C","C"],["C","C","C","C","C"],["C","C","C","C","C"],["C","C","C","C","C"],["C","C","C","C","C"]),
                compactcrafting(5,["C","C","C","C","C"],["C","C","C","C","C"],["C","C","C","C","C"],["C","C","C","C","C"],["C","C","C","C","C"]),
                compactcrafting(5,["C","C","C","C","C"],["C","C","C","C","C"],["C","C","C","C","C"],["C","C","C","C","C"],["C","C","C","C","C"]),
                compactcrafting(5,["A","A","B","A","A"],["A","A","A","A","A"],["B","A","A","A","B"],["A","A","A","A","A"],["A","A","B","A","A"]),
            ],
            catalyst:'elementalcraft:swift_alloy_ingot',
            components:{
                "A":component('ars_nouveau:archwood_planks'),
                "B":component('kubejs:polished_gold_block'),
                "C":component('create:framed_glass')
            },
            output:'ars_nouveau:source_jar',
            output_amount:1,
            id:`${id_prefix}source_jar`
        },
        {
            recipesize:9,
            layer:[
                compactcrafting(9,["B","B","C","C","C","C","C","B","B"],["B","C","C","C","C","C","C","C","B"],["C","C","C","C","C","C","C","C","C"],["C","C","C","C","C","C","C","C","C"],["C","C","C","C","C","C","C","C","C"],["C","C","C","C","C","C","C","C","C"],["C","C","C","C","C","C","C","C","C"],["B","C","C","C","C","C","C","C","B"],["B","B","C","C","C","C","C","B","B"]),
                compactcrafting(9,["A"," "," "," "," "," "," "," ","A"],[" "," "," "," "," "," "," "," "," "],[" "," ","C","C","C","C","C"," "," "],[" "," ","C","B","B","B","C"," "," "],[" "," ","C","B","C","B","C"," "," "],[" "," ","C","B","B","B","C"," "," "],[" "," ","C","C","C","C","C"," "," "],[" "," "," "," "," "," "," "," "," "],["A"," "," "," "," "," "," "," ","A"]),
                compactcrafting(9,["A"," "," "," "," "," "," "," ","A"],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],["A"," "," "," "," "," "," "," ","A"]),
                compactcrafting(9,["A"," "," "," "," "," "," "," ","A"],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],["A"," "," "," "," "," "," "," ","A"]),
                compactcrafting(9,["A"," "," "," "," "," "," "," ","A"],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],["A"," "," "," "," "," "," "," ","A"]),
                compactcrafting(9,["A"," "," "," "," "," "," "," ","A"],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],["A"," "," "," "," "," "," "," ","A"]),
                compactcrafting(9,["A"," "," "," "," "," "," "," ","A"],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "],["A"," "," "," "," "," "," "," ","A"]),
                compactcrafting(9,["A"," "," "," "," "," "," "," ","A"],[" "," "," "," "," "," "," "," "," "],[" "," ","C","C","C","C","C"," "," "],[" "," ","C","B","B","B","C"," "," "],[" "," ","C","B","C","B","C"," "," "],[" "," ","C","B","B","B","C"," "," "],[" "," ","C","C","C","C","C"," "," "],[" "," "," "," "," "," "," "," "," "],["A"," "," "," "," "," "," "," ","A"]),
                compactcrafting(9,["B","B","C","C","C","C","C","B","B"],["B","C","C","C","C","C","C","C","B"],["C","C","C","C","C","C","C","C","C"],["C","C","C","C","C","C","C","C","C"],["C","C","C","C","C","C","C","C","C"],["C","C","C","C","C","C","C","C","C"],["C","C","C","C","C","C","C","C","C"],["B","C","C","C","C","C","C","C","B"],["B","B","C","C","C","C","C","B","B"])
            ],
            catalyst:'elementalcraft:swift_alloy_ingot',
            components:{
                "A":component('ars_nouveau:archwood_planks'),
                "B":component('kubejs:polished_gold_block'),
                "C":component('ars_nouveau:sourcestone')
            },
            output:'ars_nouveau:arcane_core',
            output_amount:1,
            id:`${id_prefix}arcane_core`
        }]

    recipes.forEach(recipe =>{
        event.custom({ 
            "type":"compactcrafting:miniaturization",
            "recipeSize":recipe.recipesize,
            "layers":recipe.layer,
            "catalyst":{"id":recipe.catalyst,"Count":1},
            "components":recipe.components,
            "outputs":[{"id":recipe.output,"Count":recipe.output_amount}]
        }).id(recipe.id)
    })
})