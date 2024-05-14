StartupEvents.registry("fluid",event =>{

    /** 
    {
     id:,
     color:
    }
    */
    const fluids = [
        {
            id:'liquid_soul',
            color:0x0873A8
        },
        {
            id:'artificial_oil',
            color:0x443939
        },
        {
            id:'high_purity_oil',
            color:0x000000
        }]

    fluids.forEach(fluid =>{
        event.create(fluid.id).thickTexture(fluid.color).bucketColor(fluid.color)
    })
    
    event.create('liquid_mana').stillTexture('kubejs:block/liquid_mana/liquid_mana_still').flowingTexture('kubejs:block/liquid_mana/liquid_mana_flowing').bucketColor(0x48E9F5)
    event.create('purewater').stillTexture('kubejs:block/purewater/purewater_still').flowingTexture('kubejs:block/purewater/purewater_flowing').bucketColor(0x67ECFA)
})