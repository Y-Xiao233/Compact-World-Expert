REIEvents.removeCategories(event => {
  const hide_by_categories = [
    'jeresources:worldgen',
    'elementalcraft:purification',
    'jeresources:villager',
    'industrialforegoing:ore_washer',
    'industrialforegoing:fermenter',
    'industrialforegoing:ore_sieve',
    'create:mystery_conversion'
  ]

  hide_by_categories.forEach(categories =>{
    event.remove(categories)
  })
})