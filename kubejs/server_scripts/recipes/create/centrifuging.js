ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/create/centrifuging/'

    /*
    {
     input_fluid:fluids(),
     output_fluid:fluids(),
     id:''
    }
    */

    const recipes = [
        {
            input_fluid:fluids('kubejs:artificial_oil',5),
            output_fluid:fluids('kubejs:high_purity_oil',2),
            id:'high_purity_oil'
        }]

    recipes.forEach(recipe => {
        event.custom({
            "type": "estrogen:centrifuging",
            "ingredients":[recipe.input_fluid],
            "results":[recipe.output_fluid]
        }).id(`${id_prefix}${recipe.id}`)
    })
})