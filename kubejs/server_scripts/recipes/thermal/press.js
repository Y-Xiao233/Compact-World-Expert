ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/thermal/press/"

    /*
    {
     output:,
     input:,
     energy:,
     pressDie:,
     id:
    }
    */

    const recipes = [
        {
            output:'kubejs:lens_of_blank',
            input:'psi:ivory_psimetal',
            energy:10000,
            id:'ivory_psimetal'
        },
        {
            output:'mekanism:advanced_control_circuit',
            input:'mekanism:alloy_infused',
            energy:4000,
            pressDie:'kubejs:press_control_circuit_die',
            id:'advanced_control_circuit'
        }]

    recipes.forEach(recipe =>{
        if(recipe.pressDie == undefined){
            event.recipes.thermal.press(recipe.output,recipe.input).energy(recipe.energy).id(`${id_prefix}${recipe.id}`)
        }else{
            event.recipes.thermal.press(recipe.output,[recipe.input,recipe.pressDie]).energy(recipe.energy).id(`${id_prefix}${recipe.id}`)
        }
    })
})