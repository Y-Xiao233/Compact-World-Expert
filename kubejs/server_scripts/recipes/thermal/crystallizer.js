ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/thermal/crystallizer/"

    const recipes = [
        {
            input:'naturesaura:bottle_two_the_rebottling',
            fluid:Fluid.of('kubejs:molten_aqueous_spirit',250),
            output:Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:other"}').weakNBT(),
            energy:1000,
            id:'aura_bottle_other'
        },
        {
            input:'thermal:coal_coke',
            fluid:Fluid.of('thermal:heavy_oil',100),
            output:'thermal:tar',
            energy:1000,
            id:'tar'
        },
        {
            input:'minecraft:quartz',
            fluid:Fluid.of('thermal:light_oil',100),
            output:'kubejs:quartz_light_oil',
            energy:1000,
            id:'quartz_light_oil'
        }]

    recipes.forEach(recipe =>{
        event.recipes.thermal.crystallizer(recipe.output,[recipe.fluid,recipe.input]).energy(recipe.energy).id(`${id_prefix}${recipe.id}`)
    })
})