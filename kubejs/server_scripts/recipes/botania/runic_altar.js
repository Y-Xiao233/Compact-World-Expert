ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/botania/runic_altar/"
    /**
    {
     output:,
     input:[],
     mana:,
     id:`${id_prefix}`
    }
    */

    const recipes = [
        {
            output:'mythicbotany:wither_aconite_floating',
            input:['minecraft:wither_rose','botania:rune_pride','#botania:petals/black','#botania:petals/black','minecraft:grass_block'],
            mana:10000,
            id:`${id_prefix}wither_aconite`
        }]

    recipes.forEach(recipe =>{
      event.recipes.botania.runic_altar(recipe.output,recipe.input,recipe.mana).id(recipe.id)
    })
})