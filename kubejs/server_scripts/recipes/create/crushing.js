ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/create/crushing/"

    const recipes = [
        {
            output:['powah:uraninite',Item.of('powah:uraninite',2).withChance(0.8)],
            input:'powah:uraninite_ore_dense',
            time:10,
            id:`${id_prefix}uraninite`
        },
        {
            output:['create_new_age:thorium',Item.of('create_new_age:thorium',2).withChance(0.8)],
            input:'create_new_age:thorium_ore',
            time:10,
            id:`${id_prefix}thorium`
        }]

    recipes.forEach(recipe => {
        event.recipes.create.crushing(recipe.output,recipe.input,recipe.time).id(recipe.id)
    })
})