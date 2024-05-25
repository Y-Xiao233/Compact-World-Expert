ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/industrialforegoing/stonework_generate/"

    /*
    {
     output:,
     waterNeed:,
     lavaNeed:,
     waterConsum:,
     lavaConsum:,
     id:
    }
    */

    const recipes = [
        {
            output:'quark:soul_sandstone',
            waterNeed:1000,
            lavaNeed:1000,
            waterConsum:1000,
            lavaConsum:500,
            id:'soul_sandstone'
        }]

    recipes.forEach((recipe) => {
        event.recipes.industrialforegoing.stonework_generate(recipe.output,recipe.waterNeed,recipe.lavaNeed,recipe.waterConsum,recipe.lavaConsum).id(`${id_prefix}${recipe.id}`)
    })
})