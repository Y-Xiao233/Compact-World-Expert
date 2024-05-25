ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/mekanism/rotary/"

    /**
    {
     gas:,
     fluid:,
     id:`${id_prefix}`
    }
    */

    const recipes = [
        {
            gas:gases('kubejs:mana_gas'),
            fluid:fluids('kubejs:liquid_mana',1),
            id:`${id_prefix}mana`
        },
        {
            gas:gases('mekanism:steam'),
            fluid:fluids('kubejs:purewater',1),
            id:`${id_prefix}purewater`
        },
        {
            gas:gases('kubejs:tainted_matter_gas',1),
            fluid:fluids('kubejs:liquid_tainted_matter',1),
            id:`${id_prefix}tainted_matter`
        }]

    recipes.forEach((recipe) => {
        event.custom({
            "type":"mekanism:rotary",
            "fluidInput":recipe.fluid,
            "fluidOutput":recipe.fluid,
            "gasInput":recipe.gas,
            "gasOutput":recipe.gas
        }).id(recipe.id)
    })
})