ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/mekanism_generators/fission/"

    const recipes = [
        {
            gas:gases("kubejs:mana_gas",10),
            output:gases("mekanism:oxygen",10),
            heat:0.000001,
            id:`${id_prefix}oxygen`
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "mekanism:fission",
            "input": recipe.gas,
            "output": recipe.output,
            "heat": recipe.heat
        }).id(recipe.id)
    })
})