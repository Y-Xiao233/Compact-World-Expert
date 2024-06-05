JEIEvents.removeCategories(event => {
  const hide_by_categories = [
    'jeresources:worldgen',
    'elementalcraft:purification',
    'jeresources:villager',
    'industrialforegoing:ore_washer',
    'industrialforegoing:fermenter',
    'industrialforegoing:ore_sieve',
    'create:mystery_conversion',
    'vintageimprovements:unpacking',
    'malum:spirit_rite',
    'malum:spirit_transmutation',
    'fluxnetworks:creating_flux',
    'malum:spirit_repair',
    'jeresources:dungeon',
    'industrialforegoing:machine_produce',
    'vintageimprovements:leaves_vibrating',
    'vintageimprovements:vibrating',
    'ironfurnaces:generator_smoking',
    'cyclic:generator_fluid',
    'cyclic:packager'
  ]

  hide_by_categories.forEach(categories =>{
    event.remove(categories)
  })
})