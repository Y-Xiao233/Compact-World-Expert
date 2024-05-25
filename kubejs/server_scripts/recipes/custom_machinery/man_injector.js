ServerEvents.recipes(event => {
    const id_prefix = "compact_world:recipes/custom_machinery/mana_injector/"

    event.recipes.custommachinery.custom_machine('cwe:mana_injector', 50)
    .produceItem('botania:black_lotus').chance(0.8)
    .produceItem('botania:blacker_lotus').chance(0.2)
    .requireItem('botania:black_petal')
    .requireMana(10000)
    .requireEnergyPerTick(8000)
    .id(`${id_prefix}black_lotus`)
})