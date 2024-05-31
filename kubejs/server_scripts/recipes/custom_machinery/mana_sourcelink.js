ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/custom_machinery/mana_sourcelink/'

    event.recipes.custommachinery.custom_machine('cwe:mana_sourcelink',80)
    .requireMana(640)
    .produceSource(3200)
    .id(`${id_prefix}souce_from_mana_sourcelink`)
})