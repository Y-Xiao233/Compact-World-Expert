ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/create/special_sequenced_assembly/special/"
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
            output:[Item.of('elementalcraft:purecrystal')],
            input:'elementalcraft:inert_crystal',
            transitionalItem:'kubejs:incomplete_craftpurecrystal',
            main:[
                pressing('elementalcraft:purecrystal','kubejs:incomplete_craftpurecrystal'),
                deploying('kubejs:incomplete_craftpurecrystal',['elementalcraft:inert_crystal',Item.of('botania:alfheim_portal').withNBT({display:{Name:'{"text":"精灵交易"}'}}).enchant('kubejs:other_sequenced_assembly',1).weakNBT()]),
                deploying('kubejs:incomplete_craftpurecrystal',['elementalcraft:inert_crystal',Item.of('mekanism:enrichment_chamber').withNBT({display:{Name:'{"text":"富集"}'}}).enchant('kubejs:other_sequenced_assembly',1).weakNBT()]),
                deploying('kubejs:incomplete_craftpurecrystal',['elementalcraft:inert_crystal',Item.of('naturesaura:nature_altar').withNBT({display:{Name:'{"text":"自然祭坛-欣快催化器"}'}}).enchant('kubejs:other_sequenced_assembly',1).weakNBT()]),
                pressing('elementalcraft:purecrystal','kubejs:incomplete_craftpurecrystal')
            ],
            loops:1,
            id:`${id_prefix}purecrystal`
        }]

    recipes.forEach(recipe =>{
        sequenced_assembly(recipe.output,recipe.input,recipe.main).transitionalItem(recipe.transitionalItem).loops(recipe.loops).id(recipe.id)
    })
})