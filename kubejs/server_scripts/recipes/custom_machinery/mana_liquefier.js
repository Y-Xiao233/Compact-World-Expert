ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/custom_machinery/mana_liquefier/'

    event.recipes.custommachinery.custom_machine('cwe:mana_liquefier',20)
    .produceFluid(Fluid.of('kubejs:liquid_rough_mana',1000))
    .requireMana(640)
    .id(`${id_prefix}liquid_rough_mana`)
})