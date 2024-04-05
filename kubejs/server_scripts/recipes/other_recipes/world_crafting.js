const ForgeCapabilities = Java.loadClass("net.minecraftforge.common.capabilities.ForgeCapabilities")

BlockEvents.rightClicked('create:fluid_tank', (event) => {
/**
此段代码由Mango is me!提供
*/
    if (event.hand !== "MAIN_HAND") return;
    if(!event.player.shiftKeyDown) return;
    const { block, server } = event;
  
    const scheme = [
      [2, 0, 0],
      [-2, 0, 0],
      [0, 0, 2],
      [0, 0, -2],
    ];
    const blockId = Utils.id('create:depot');
    event.player.tell('\u00a7c注意:若要进行世界合成\u00a7a流体罐下方只能是紧实型压缩空间壁')
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
    /**
    此部分函数的延时执行效果由Mango is me!提供
    此部分函数的方块内流体获取由FalAut提供
    */
    const { block, hand, item, server} = event
    const tank = 'create:fluid_tank'
    const depot = 'create:depot'
    if (hand.name() != "MAIN_HAND") return
    if(block.offset(1,0,0).id == tank || block.offset(-1,0,0).id == tank || block.offset(0,0,1).id == tank || block.offset(0,0,-1).id == tank ||block.offset(1,0,0).id == tank) return
    function world_crafting(tick,hand_item,item1,item1_count,item2,item2_count,item3,item3_count,item4,item4_count,fluid,fluid_amount,output){
        if(block.id == tank && item.id == hand_item && !(block.offset(0,-1,0).id == 'kubejs:compact_soild_wall') && block.offset(0,-1,0).id == 'compactmachines:solid_wall'){
            let FluidTank = block.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get().getFluidInTank(0)
                if(FluidTank.getFluid().arch$registryName() == fluid && FluidTank.amount >= fluid_amount){
                    block.offset(2,0,0).inventory.allItems.forEach(items1 =>{
                    block.offset(-2,0,0).inventory.allItems.forEach(items2 =>{
                    block.offset(0,0,2).inventory.allItems.forEach(items3 =>{
                    block.offset(0,0,-2).inventory.allItems.forEach(items4 =>{
                        if((block.offset(2,0,0).id == depot && (items1.id == item1 || items2.id == item1 || items3.id == item1 || items4.id == item1)) &&
                           (block.offset(0,0,2).id == depot && (items1.id == item3 || items2.id == item3 || items3.id == item3 || items4.id == item3)) &&
                           (block.offset(-2,0,0).id == depot && (items1.id == item2 || items2.id == item2 || items3.id == item2 || items4.id == item2)) &&
                           (block.offset(0,0,-2).id == depot &&(items1.id == item4 || items2.id == item4 || items3.id == item4 || items4.id == item4))){
                            let counts1 = items1.getCount()
                            let counts2 = items2.getCount()
                            let counts3 = items2.getCount()
                            let counts4 = items4.getCount()
                            if(!(counts1 >= item1_count && counts2 >= item2_count && counts3 >= item3_count && counts4 >= item4_count)) return
                            let itemEntity = block.createEntity("item")
                            block.offset(0,-1,0).set('kubejs:compact_soild_wall')
                            itemEntity.item = output
                            itemEntity.x+=0.5
                            itemEntity.y+=1
                            itemEntity.z+=0.5
                            for(let i = 0;i < tick-9;i ++){
                                server.scheduleInTicks(i,(event) =>{
                                    server.runCommandSilent(`particle minecraft:ambient_entity_effect ${block.x} ${block.y + 1} ${block.z} 0 0 0 0.5 10 force @a`)
                                    server.runCommandSilent(`particle minecraft:item ${item1} ${block.offset(2,0,0).x} ${block.y + 1} ${block.offset(2,0,0).z} 0 0 0 0.05 10 force @a`)
                                    server.runCommandSilent(`particle minecraft:item ${item2} ${block.offset(-2,0,0).x} ${block.y + 1} ${block.offset(-2,0,0).z} 0 0 0 0.05 10 force @a`)
                                    server.runCommandSilent(`particle minecraft:item ${item3} ${block.offset(0,0,2).x} ${block.y + 1} ${block.offset(0,0,2).z} 0 0 0 0.05 10 force @a`)
                                    server.runCommandSilent(`particle minecraft:item ${item4} ${block.offset(0,0,-2).x} ${block.y + 1} ${block.offset(0,0,-2).z} 0 0 0 0.05 10 force @a`)
                                })
                            }
                            items1.count = counts1 - item1_count
                            items2.count = counts2 - item2_count
                            items3.count = counts3 - item3_count
                            items4.count = counts4 - item4_count
                            server.runCommandSilent(`data merge block ${block.x} ${block.y} ${block.z} {TankContent:{Amount:${FluidTank.amount - fluid_amount}}}`)
                            server.scheduleInTicks(tick,(event) =>{
                                itemEntity.spawn()
                                block.offset(0,-1,0).set('compactmachines:solid_wall')
                            })
                        }
                    })})})})
                }
        }
        return world_crafting
    }
    
    world_crafting(60,'ars_nouveau:dominion_wand','kubejs:soul_gem',4,'botania:rune_water',4,'elementalcraft:drenched_iron_ingot',4,'naturesaura:token_euphoria',4,'minecraft:lava',2000,'ars_nouveau:drygmy_charm')
    world_crafting(60,'ars_nouveau:dominion_wand','kubejs:gem_earth',1,'minecraft:polished_andesite',1,'kubejs:gem_earth',1,'minecraft:polished_andesite',1,'minecraft:water',4000,'minecraft:mossy_cobblestone')
    world_crafting(60,'naturesaura:token_euphoria','create:andesite_casing',1,'elementalcraft:purecrystal',1,'botania:terrasteel_nugget',1,'kubejs:soul_gem',1,'kubejs:liquid_soul',200,'industrialforegoing:machine_frame_pity')
    world_crafting(60,'ars_nouveau:dominion_wand','industrialforegoing:machine_frame_pity',1,'botania:terrasteel_ingot',1,'create:fluid_tank',1,'kubejs:soul_gem',1,'kubejs:liquid_soul',1000,'industrialforegoing:dissolution_chamber')
    world_crafting(60,'ars_nouveau:dominion_wand','botania:gaia_ingot',1,'botania:gaia_ingot',1,'naturesaura:token_euphoria',1,'naturesaura:token_euphoria',1,'kubejs:liquid_soul',200,'ars_nouveau:starbuncle_charm')
})