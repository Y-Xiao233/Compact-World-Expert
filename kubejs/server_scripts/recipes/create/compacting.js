ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/create/compacting/'
    /**
    {
     input:,
     output:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            input:['create_new_age:overcharged_golden_sheet','create_new_age:overcharged_iron_sheet','ae2:printed_silicon','kubejs:gaia_nugget'],
            output:'4x create_new_age:blank_circuit',
            id:`${id_prefix}blank_circuit`
        }]

    recipes.forEach(recipes =>{
        event.recipes.create.compacting(recipes.output,recipes.input).id(recipes.id)
    })
})