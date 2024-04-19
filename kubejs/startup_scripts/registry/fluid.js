StartupEvents.registry("fluid",event =>{
    const fluids = [
        {
            id:'liquid_soul',
            color:0x0873A8
        }]

    fluids.forEach(fluid =>{
        event.create(fluid.id).thickTexture(fluid.color).bucketColor(fluid.color)
    })
    event.create('liquid_mana').stillTexture('kubejs:block/liquid_mana/liquid_mana_still').flowingTexture('kubejs:block/liquid_mana/liquid_mana_flowing').bucketColor(0x48E9F5)
})