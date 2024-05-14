ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/combining/"

    /*
    {
     input:,
     output:,
     extra_input:,
     id:''
    }
    */

    const recipes = [
        {
            input:'psi:psimetal',
            output:'psi:ivory_psimetal',
            extra_input:'minecraft:bone',
            id:'ivory_psimetal'
        }]

    recipes.forEach((recipe) => {
        event.recipes.mekanism.combining(recipe.output,recipe.input,recipe.extra_input).id(`${id_prefix}${recipe.id}`)
    })
})