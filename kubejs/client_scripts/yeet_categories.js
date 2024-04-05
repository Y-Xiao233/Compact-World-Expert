REIEvents.removeCategories(event => {
  const hide_by_categories = [
    'jeresources:worldgen',
    'elementalcraft:purification',
    'jeresources:villager'
  ]

  hide_by_categories.forEach(categories =>{
    event.remove(categories)
  })
})