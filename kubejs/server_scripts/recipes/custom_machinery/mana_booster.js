ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/custom_machinery/mana_booster/'

    event.recipes.custommachinery.custom_machine('cwe:mana_booster',20)
    .requireEnergy(80)
    .requireSource(800)
    .produceMana(320)
    .id(`${id_prefix}mana_from_mana_booster`)
})