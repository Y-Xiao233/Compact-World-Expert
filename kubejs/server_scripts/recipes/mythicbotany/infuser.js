ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mythicbotany/infuser/"

    /*
    {
     fromColor:16711821,
     input:[
        items()
     ],
     mana:,
     output:items(),
     toColor:16750080,
     id:
    }
    */

    const recipes = [
        {
            fromColor:16711821,
            input:[
                items('botania:gaia_ingot'),items('malum:arcane_spirit'),
                items('minecraft:orange_dye')
            ],
            mana:4000000,
            output:items('mythicbotany:alfsteel_ingot'),
            toColor:16750080,
            id:'alfsteel_ingot'
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"mythicbotany:infuser",
            "fromColor":recipe.fromColor,
            "group":"infuser",
            "ingredients":recipe.input,
            "mana":recipe.mana,
            "output":recipe.output,
            "toColor":recipe.toColor
        }).id(`${id_prefix}${recipe.id}`)
    })
})