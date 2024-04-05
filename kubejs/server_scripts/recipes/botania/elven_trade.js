ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/botania/elven_trade/"
    /**
    {
     output:,
     input:,
     id:`${id_prefix}`
    }
    */

    const recipes = [
        {
            output:Item.of('kubejs:incomplete_craftpurecrystal','{SequencedAssembly:{Progress:0.4f,Step:2,id:"compact_world:recipes/create/special_sequenced_assembly/special/purecrystal"}}'),
            input:Item.of('kubejs:incomplete_craftpurecrystal','{SequencedAssembly:{Progress:0.2f,Step:1,id:"compact_world:recipes/create/special_sequenced_assembly/special/purecrystal"}}').weakNBT(),
            id:`${id_prefix}purecrystal_step_2`
        }]

    recipes.forEach(recipe =>{
      event.recipes.botania.elven_trade(recipe.output,recipe.input).id(recipe.id)
    })
})