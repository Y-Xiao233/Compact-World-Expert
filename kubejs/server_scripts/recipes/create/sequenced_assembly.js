ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/create/sequenced_assembly/"
    /**
    {
     output:[Item.of()],
     input:,
     main:[

     ],
     loops:,
     id:`${id_prefix}`
    }
    */
    const { pressing,cutting,mixing,filling,milling,emptying,crushing,deploying,sequenced_assembly } = event.recipes.create
    const recipes = [
        {
            output:[Item.of('apotheosis:salvaging_table')],
            input:'minecraft:smithing_table',
            main:[
                pressing('minecraft:smithing_table',['minecraft:smithing_table']),
                deploying('minecraft:smithing_table',['minecraft:smithing_table','apotheosis:gem_dust'])
            ],
            loops:8,
            id:`${id_prefix}salvaging_table`
        },
        {
            output:[Item.of('kubejs:andesite_alloy_sheet')],
            input:'kubejs:imperfect_andesite_alloy',
            main:[
                pressing('kubejs:imperfect_andesite_alloy',['kubejs:imperfect_andesite_alloy'])
            ],
            loops:3,
            id:`${id_prefix}andesite_alloy_sheet_from_imperfect_andesite_alloy`
        }]

        recipes.forEach(recipe =>{
            recipe.transitionalItem = recipe.input
            sequenced_assembly(recipe.output,recipe.input,recipe.main).transitionalItem(recipe.transitionalItem).loops(recipe.loops).id(recipe.id)
        })
})