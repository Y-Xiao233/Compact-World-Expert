REIEvents.removeCategories(event => {
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
    'fluxnetworks:creating_flux'
  ]

  hide_by_categories.forEach(categories =>{
    event.remove(categories)
  })
})