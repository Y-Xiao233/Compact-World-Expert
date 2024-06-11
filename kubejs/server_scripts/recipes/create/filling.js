ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/create/filling/'
    /**
    {
     output:,
     fluid:Fluid.of(),
     input:,
     id:
    }
    */
    const recipes = [
        {
            output:'malum:arcane_spirit',
            fluid:Fluid.of('starbunclemania:source_fluid',1000),
            input:Item.of('kubejs:spirit_press',{display:{Name:'{"text":"精魂压印模板--\u00a7c不消耗"}'}}).weakNBT(),
            id:'arcane_spirit'
        },
        {
            output:'botania:rune_mana',
            fluid:Fluid.of('kubejs:liquid_mana',1000),
            input:'kubejs:rune_blank',
            id:'rune_mana'
        },
        {
            output:'kubejs:raw_enriched_iron',
            fluid:Fluid.of('kubejs:high_purity_oil',400),
            input:'minecraft:raw_iron',
            id:'raw_enriched_iron'
        },
        {
            output:'thermal:cured_rubber',
            fluid:Fluid.of('industrialforegoing:latex',1000),
            input:'thermal:rubber',
            id:'cured_rubber'
        }]

    recipes.forEach(recipe =>{
        event.recipes.create.filling(recipe.output,[recipe.fluid,recipe.input]).id(`${id_prefix}${recipe.id}`)
    })
})