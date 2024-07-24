const ForgeCapabilities = Java.loadClass("net.minecraftforge.common.capabilities.ForgeCapabilities")
let temp_world = 0

BlockEvents.rightClicked('create:fluid_tank', (event) => {
/**
此段代码由Mango is me!提供
*/
    if (event.hand !== "MAIN_HAND") return;
    if(!event.player.shiftKeyDown) return;
    if(event.item.id !== 'minecraft:air') return;
    
    const { block, server } = event;
  
    const scheme = [
      [2, 0, 0],
      [-2, 0, 0],
      [0, 0, 2],
      [0, 0, -2]
    ];
    const blockId = Utils.id('create:depot');
    event.player.tell(Text.translate('tip.compact_world.world_crafting'))
    let x, y, z;
    for ([x, y, z] of scheme) {
      if (block.offset(x, y, z).id !== blockId) {
        server.runCommandSilent(
          `particle dust 1 0 0 10 ${block.x + x} ${block.y + y + 0.5} ${block.z + z} 0 0 0 0 1 force`
        );
      }
    }
})

BlockEvents.rightClicked(event =>{
    const {block, player, hand, item, server} = event
    const depot = 'create:depot'
    const tank = 'create:fluid_tank'
    function world_crafting(tick,hand_item,item1,item1_count,item2,item2_count,item3,item3_count,item4,item4_count,fluid,fluid_amount,output){
        if(hand.name() != "MAIN_HAND") return
        if(item.id != hand_item) return
        if(block.id != tank) return
        if(temp_world == 1) return
    
        let currentTank = block.getEntityData()["TankContent"]
        if(currentTank["FluidName"] !== fluid) return
        if(currentTank["Amount"] < fluid_amount) return
        
        
        const scheme = [
            [2, 0, 0],
            [-2, 0, 0],
            [0, 0, 2],
            [0, 0, -2]
        ]
        
        let x,y,z
        let recipeItemList = [item1,item2,item3,item4]
        let recipeCountList = [item1_count,item2_count,item3_count,item4_count]
        let recipeCurrentIndex = []
        let depotItemCountList = []
        for([x, y, z] of scheme){
            let currentBlock = block.offset(x,y,z)
            if(currentBlock.id == depot){
                if(!currentBlock.getEntityData().contains("HeldItem")) return
                let currentItem = currentBlock.getEntityData()["HeldItem"]["Item"]
                let currentIndex = recipeItemList.indexOf(currentItem['id'])
                if(currentIndex != -1){
                    if(currentItem["Count"] < recipeCountList[currentIndex]) return
                    depotItemCountList.push(currentItem["Count"])
                    recipeCurrentIndex.push(currentIndex)
                    recipeItemList.splice(currentIndex,1,"0")
                }
            }
        }
    
        let m = 0
        if(recipeCurrentIndex.length == 4){
            temp_world = 1
            recipeItemList = [item1,item2,item3,item4]
            let itemEntity = block.createEntity("item")
            itemEntity.item = output
            itemEntity.x+=0.5
            itemEntity.y+=1
            itemEntity.z+=0.5
            if(!player.stages.has("particle_disable")){
                if(!player.isFake()){
                    for(let i = 0;i < tick-9;i ++){
                        server.scheduleInTicks(i,(event) =>{
                            server.runCommandSilent(`particle minecraft:ambient_entity_effect ${block.x} ${block.y + 1} ${block.z} 0 0 0 0.5 10 force @a`)
                            m = 0
                            for([x,y,z] of scheme){
                                server.runCommandSilent(`particle minecraft:item ${recipeItemList[recipeCurrentIndex[m]]} ${block.x + x} ${block.y + 1} ${block.z + z} 0 0 0 0.05 10 force @a`)
                                m ++
                            }
                        })
                    }
                }
            }
            m = 0
            for([x,y,z] of scheme){
                server.runCommandSilent(`data merge block ${block.x + x} ${block.y} ${block.z + z} {HeldItem:{Item:{Count:${depotItemCountList[m] - recipeCountList[recipeCurrentIndex[m]]}b}}}`)
                m ++
            }
            server.runCommandSilent(`data merge block ${block.x} ${block.y} ${block.z} {TankContent:{Amount:${currentTank["Amount"] - fluid_amount}}}`)
            server.scheduleInTicks(tick,(event) =>{
                itemEntity.spawn()
                temp_world = 0
            })
        }
    }

    world_crafting(60,'ars_nouveau:dominion_wand','kubejs:soul_gem',1,'botania:rune_water',1,'elementalcraft:drenched_iron_ingot',1,'naturesaura:token_euphoria',1,'minecraft:lava',2000,'ars_nouveau:drygmy_charm')
    world_crafting(60,'ars_nouveau:dominion_wand','kubejs:gem_earth',1,'minecraft:polished_andesite',1,'kubejs:gem_earth',1,'minecraft:polished_andesite',1,'minecraft:water',4000,'2x minecraft:mossy_cobblestone')
    world_crafting(60,'naturesaura:token_euphoria','create:andesite_casing',1,'elementalcraft:purecrystal',1,'botania:terrasteel_nugget',4,'kubejs:soul_gem',1,'kubejs:liquid_soul',200,'industrialforegoing:machine_frame_pity')
    world_crafting(60,'ars_nouveau:dominion_wand','industrialforegoing:machine_frame_pity',1,'botania:terrasteel_ingot',1,'create:fluid_tank',1,'kubejs:soul_gem',1,'kubejs:liquid_soul',1000,'industrialforegoing:dissolution_chamber')
    world_crafting(60,'ars_nouveau:dominion_wand','botania:gaia_ingot',1,'botania:gaia_ingot',1,'naturesaura:token_euphoria',1,'naturesaura:token_euphoria',1,'kubejs:liquid_soul',200,'2x ars_nouveau:starbuncle_charm')
})