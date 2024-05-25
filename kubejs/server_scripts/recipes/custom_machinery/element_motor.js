ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/custom_machinery/element_motor/'

    event.recipes.custommachinery.custom_machine('cwe:element_motor',8000)
    .requireItem('elementalcraft:firecrystal')
    .produceSU(32, 128)
    .id(`${id_prefix}rpm_from_firecrystal`)
})