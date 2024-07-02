ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/create/cutting/'
    /**
    {
     input:,
     output:,
     time:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            input:'#forge:logs/archwood/blue',
            output:'6x ars_nouveau:archwood_planks',
            time:20,
            id:`${id_prefix}archwood_planks`
        }]

    recipes.forEach(recipes =>{
        event.recipes.create.cutting(recipes.output,recipes.input,recipes.time).id(recipes.id)
    })
})