Platform.getInfo('kubejs').name = 'Compact World: Expert'
/**
{
 id:,
 soundtype:,
 requirestool:,
 tooltier:`${tooltiers.iron}`,
 tooltype:`${tooltypes.pickaxe}`
}
*/

StartupEvents.registry("block", (event) => {
    const tool_tiers = [
        {
            wood:'minecraft:needs_wooden_tool',
            iron:'minecraft:needs_iron_tool',
            diamond:'minecraft:needs_diamond_tool',
            netherite:'minecraft:needs_netherite_tool'
        }]
        
    const tool_types = [
        {
            pickaxe:'minecraft:mineable/pickaxe',
            axe:'minecraft:mineable/axe',
            shovel:'minecraft:mineable/shovel'
        }]
    
    tool_tiers.forEach(tooltiers =>{
    tool_types.forEach(tooltypes =>{
        const registry_block = [
            {
                id:'compact_block',
                soundtype:"metal",
                requirestool:true,
                tooltier:`${tooltiers.wood}`,
                tooltype:`${tooltypes.pickaxe}`
            },
            {
                id:'gold_rich_compact_wall',
                soundtype:"stone",
                requirestool:true,
                tooltier:`${tooltiers.wood}`,
                tooltype:`${tooltypes.pickaxe}`
            },
            {
                id:'polished_gold_block',
                soundtype:"metal",
                requirestool:true,
                tooltier:`${tooltiers.iron}`,
                tooltype:`${tooltypes.pickaxe}`
            },
            {
                id:'obsidian',
                soundtype:"stone",
                requirestool:true,
                tooltier:`${tooltiers.iron}`,
                tooltype:`${tooltypes.pickaxe}`
            },
            {
                id:'soul_steel_casing',
                soundtype:"metal",
                requirestool:true,
                tooltier:`${tooltiers.iron}`,
                tooltype:`${tooltypes.pickaxe}`
            },
            {
                id:'token_euphoria_catalyst',
                soundtype:"stone",
                requirestool:true,
                tooltier:`${tooltiers.iron}`,
                tooltype:`${tooltypes.pickaxe}`
            }]
        
        registry_block.forEach(blocks =>{
            if(blocks.requirestool == false){
                event.create(blocks.id).soundType(blocks.soundtype)
            }else{
                event.create(blocks.id).soundType(blocks.soundtype).requiresTool(true).tagBlock(blocks.tooltier).tagBlock(blocks.tooltype)
            }
        })
    })
    })
    
    event.create('projector_dish','cardinal').soundType("metal")
    .requiresTool(true).tagBlock('minecraft:needs_iron_tool').tagBlock('minecraft:mineable/pickaxe')
    .fullBlock(false).renderType('translucent').transparent(true).opaque(false).notSolid()

    event.create('compact_keywall_swift','cardinal').soundType("stone").unbreakable().model('kubejs:block/compact_keywall')
    event.create('compact_keywall_sky','cardinal').soundType("stone").unbreakable().model('kubejs:block/compact_keywall')
    event.create('compact_soild_wall').soundType("stone").unbreakable()
    event.create('swift_alloy_sand','falling').soundType("sand").requiresTool(false).hardness(0.1)
    event.create('fake_shaft')
    event.create('dream_portal','cardinal').box(0,0,7,16,16,9).unbreakable().soundType("amethyst").noCollision()
})