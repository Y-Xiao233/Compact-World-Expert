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
        },
        {
            id:'liquid_tainted_matter',
            color:0xD5B224
        },
        {
            id:'molten_aqueous_spirit',
            color:0x2B70FA
        },
        {
            id:'molten_crystal_blazing',
            color:0xF2D72B
        },
        {
            id:'liquid_rough_mana',
            color:0x29CAD5
        }]

    fluids.forEach(fluid =>{
        // event.create(fluid.id).thickTexture(fluid.color).bucketColor(fluid.color)
        event.create(fluid.id).stillTexture('kubejs:block/liquid_overlayer/still').color(fluid.color).flowingTexture('kubejs:block/liquid_overlayer/flow').color(fluid.color).bucketColor(fluid.color)
    })
    
    event.create('liquid_mana').stillTexture('kubejs:block/liquid_mana/liquid_mana_still').flowingTexture('kubejs:block/liquid_mana/liquid_mana_flowing').bucketColor(0x48E9F5)
    event.create('purewater').stillTexture('kubejs:block/purewater/purewater_still').flowingTexture('kubejs:block/purewater/purewater_flowing').bucketColor(0x67ECFA)
    // event.create('liquid_blue_dye').stillTexture('kubejs:block/liquid_overlayer/still').color(0x2B70FA).flowingTexture('kubejs:block/liquid_overlayer/flow').color(0x2B70FA).bucketColor(0x2B70FA)
    // event.create('molten_crystal_blazing').stillTexture('kubejs:block/liquid_overlayer/still').color(0xF2D72B).flowingTexture('kubejs:block/liquid_overlayer/flow').color(0xF2D72B).bucketColor(0xF2D72B)
})