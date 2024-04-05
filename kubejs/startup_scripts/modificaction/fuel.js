ItemEvents.modification(event => {
    event.modify('elementalcraft:firecrystal', item => {
        item.burnTime = 6400
    })
})