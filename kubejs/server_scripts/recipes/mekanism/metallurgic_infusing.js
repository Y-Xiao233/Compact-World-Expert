ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:reicpes/mekanism/metallurgic_infusing/'

    /**
    {
     input:,
     output:,
     infuse_type:,
     amount:,
     id:`${id_prefix}`
    }
    */

    const recipes = [
        {
            input:items('create:andesite_casing'),
            output:'kubejs:soul_steel_casing',
            infuse_type:'kubejs:soul',
            amount:80,
            id:`${id_prefix}soul_steel_casing`
        },
        {
            input:items('botania:rune_earth'),
            output:'botania:rune_water',
            infuse_type:'kubejs:soul',
            amount:20,
            id:`${id_prefix}rune_water`
        },
        {
            input:items('ars_nouveau:source_gem'),
            output:'kubejs:soul_gem',
            infuse_type:'kubejs:soul',
            amount:20,
            id:`${id_prefix}soul_gem`
        }]

    recipes.forEach(recipe =>{
            event.custom({
                "type":"mekanism:metallurgic_infusing",
                "chemicalInput":{"amount":recipe.amount,"infuse_type":recipe.infuse_type},
                "itemInput":{"ingredient":recipe.input},
                "output":{"item":recipe.output}
            }).id(recipe.id)
        })
})