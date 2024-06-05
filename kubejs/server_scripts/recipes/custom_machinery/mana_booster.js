ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/custom_machinery/mana_booster/'

    event.recipes.custommachinery.custom_machine('cwe:mana_booster',5)
    .requireEnergy(80)
    .requireSource(3000)
    .produceMana(3000)
    .id(`${id_prefix}mana_from_mana_booster`)
})