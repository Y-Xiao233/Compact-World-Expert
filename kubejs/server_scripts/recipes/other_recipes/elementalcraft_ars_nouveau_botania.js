/**

let item_entity = 0
let input = "minecraft:chest"
let right_click = 0

BlockEvents.rightClicked(event =>{
    const {block, player, server, hand} = event

    if(hand !== "MAIN_HAND") return
    if(block.id !== 'botania:mana_pool') return

    let pool_mana
    let mana = 100
    let output = 'ars_nouveau:archwood_chest'

    pool_mana = Math.floor(block.getEntityData().get("mana"))

    if(pool_mana >= mana && item_entity == 1){
        server.runCommandSilent(`data merge block ${block.x} ${block.y} ${block.z} {mana:${pool_mana-100}}`)
        let itemEntity1 = event.block.createEntity("item")
        itemEntity1.item = output
        itemEntity1.x+=0.5
        itemEntity1.y+=0.2
        itemEntity1.z+=0.5
        itemEntity1.spawn()
        item_entity = 1
        right_click = 1
    }else if(item_entity == 0 && pool_mana >=100){
        player.tell('世界中没有正确的物品')
    }else if(pool_mana <=100 && item_entity !== 0){
        player.tell(`魔力不足,需要\u00a7a${mana}魔力\u00a7f才能进行合成`)
    }else if(pool_mana <= mana && item_entity == 0){
        player.tell('魔力不足并且世界中没有正确的物品')
    }
})

ServerEvents.tick(event =>{
    item_entity = 0
    event.server.entities.forEach(entity =>{
        if(entity.type == "minecraft:item"){
            let id = entity.item.id.toString()
            console.log(`${id}`)
            if(entity.item.id.toString() == "minecraft:chest" && item_entity == 0){
                item_entity = 1
                if(right_click == 1){
                    entity.kill()
                    right_click = 0
                }
            }else(
                item_entity = 0
            )
        }
    })
})

*/
let temp = 0

// PlayerEvents.loggedIn(event =>{
//     temp = 0
// })

BlockEvents.rightClicked('botania:mana_pool', (event) => {
    /**
    此段代码由Mango is me!提供
    */
        if (event.hand !== "MAIN_HAND") return;
        if(!event.player.shiftKeyDown) return;
        if(event.item.id !== 'minecraft:air') return;
        const { block, server } = event;
      
        const scheme1 = [
          [2, 0, 2],
          [2, 0, -2],
          [-2, 0, 2],
          [-2, 0, -2],
        ];

        const scheme2 = [
            [2, 1, 2],
            [2, 1, -2],
            [-2, 1, 2],
            [-2, 1, -2],
          ];

        const blockId1 = Utils.id('elementalcraft:container');
        const blockId2 = Utils.id('ars_nouveau:source_jar');

        event.player.tell(Text.translate('tip.compact_world.elementalcraft_ars_nouveau_botania_1'))
        event.player.tell(Text.translate('tip.compact_world.elementalcraft_ars_nouveau_botania_2'))
        event.player.tell(Text.translate('tip.compact_world.elementalcraft_ars_nouveau_botania_3'))

        let x1, y1, z1;
        let x2, y2, z2;

        for ([x1, y1, z1] of scheme1) {
          if (block.offset(x1, y1, z1).id !== blockId1) {
            server.runCommandSilent(
              `particle dust 1 0 0 10 ${block.x + x1} ${block.y + y1 + 0.5} ${block.z + z1} 0 0 0 0 1 force`
            );
          }
        }

        for ([x2, y2, z2] of scheme2) {
            if (block.offset(x2, y2, z2).id !== blockId2) {
              server.runCommandSilent(
                `particle dust 0 1 0 10 ${block.x + x2} ${block.y + y2 + 0.5} ${block.z + z2} 0 0 0 0 1 force`
              );
            }
          }
})



BlockEvents.rightClicked(event =>{
    const {block, player, server, hand} = event
    if(hand !== "MAIN_HAND") return
    if(block.id !== "botania:mana_pool") return


    function elementalcraft_ars_nouveau_botania(output_item,hand_item,fire_amounts,water_amounts,earth_amounts,air_amounts,source,mana,tick){

        let mana_amount = block.getEntityData().get("mana")

        let pos_base1 = [
            block.offset(2,0,2),
            block.offset(2,0,-2),
            block.offset(-2,0,2),
            block.offset(-2,0,-2),
        ]
    
        let pos_base2 = [
            block.offset(2,1,2),
            block.offset(2,1,-2),
            block.offset(-2,1,2),
            block.offset(-2,1,-2),
        ]
    
        let e_id,e_amount,e_type,e_pos_x,e_pos_y,e_pos_z
        let a_id,a_amount,a_pos_x,a_pos_y,a_pos_z
        let air,fire,water,earth = 0
        let air_amount,fire_amount,water_amount,earth_amount
        let air_pos_x,air_pos_y,air_pos_z,water_pos_x,water_pos_y,water_pos_z,fire_pos_x,fire_pos_y,fire_pos_z,earth_pos_x,earth_pos_y,earth_pos_z
        let a1_pos_x,a1_pos_y,a1_pos_z,a2_pos_x,a2_pos_y,a2_pos_z,a3_pos_x,a3_pos_y,a3_pos_z,a4_pos_x,a4_pos_y,a4_pos_z = 0
        let a_amount1,a_amount2,a_amount3,a_amount4 = undefined
        let e,a = 0
        let b_amount_needed = mana
        let a_amount_needed = source
        let input = hand_item
        let output = output_item
    
        let eid = 'elementalcraft:container'
        let aid = 'ars_nouveau:source_jar'
    
        pos_base1.forEach(pos1 =>{
            let e_scheme = [
                [pos1.id,pos1.getEntityData().get("element_storage")["element_amount"],pos1.getEntityData().get("element_storage")["element_type"],pos1.x,pos1.y,pos1.z]
            ]
    
            for([e_id,e_amount,e_type,e_pos_x,e_pos_y,e_pos_z] of e_scheme){
                if(e_id !== eid) return
    
                if(e_type == "air"){
                    air = 1
                    air_amount = e_amount
                    air_pos_x = e_pos_x
                    air_pos_y = e_pos_y
                    air_pos_z = e_pos_z
                }else if(e_type == "fire"){
                    fire = 1
                    fire_amount = e_amount
                    fire_pos_x = e_pos_x
                    fire_pos_y = e_pos_y
                    fire_pos_z = e_pos_z
                }else if(e_type == "water"){
                    water = 1
                    water_amount = e_amount
                    water_pos_x = e_pos_x
                    water_pos_y = e_pos_y
                    water_pos_z = e_pos_z
                }else if(e_type == "earth"){
                    earth = 1
                    earth_amount = e_amount
                    earth_pos_x = e_pos_x
                    earth_pos_y = e_pos_y
                    earth_pos_z = e_pos_z
                }
                //console.log(`\u00a7bmana:${mana_amount} \u00a76air:${air_amount} \u00a7aearth:${earth_amount} \u00a7cfire:${fire_amount} \u00a73water:${water_amount}`)
                if((air_amount >= air_amounts) && (fire_amount >= fire_amounts) && (water_amount >= water_amounts) && (earth_amount >= earth_amounts) && (air == 1 && water == 1 && earth == 1 && fire == 1)/* && (block.offset(0,-1,0).id == 'compactmachines:solid_wall')*/){
                    if(mana_amount >= b_amount_needed){
                        //player.tell(`\u00a7bmana:${mana_amount} \u00a76air:${air_amount} \u00a7aearth:${earth_amount} \u00a7cfire:${fire_amount} \u00a73water:${water_amount}`)
                        //console.log(`\u00a7bmana:${mana_amount} \u00a76air:${air_amount} \u00a7aearth:${earth_amount} \u00a7cfire:${fire_amount} \u00a73water:${water_amount}`)
                        //server.runCommandSilent(`data merge block ${air_pos_x} ${air_pos_y} ${air_pos_z} {element_storage:{element_amount:${air_amount-e_amount_needed}}}`)
                        //server.runCommandSilent(`data merge block ${water_pos_x} ${water_pos_y} ${water_pos_z} {element_storage:{element_amount:${water_amount-e_amount_needed}}}`)
                        //server.runCommandSilent(`data merge block ${fire_pos_x} ${fire_pos_y} ${fire_pos_z} {element_storage:{element_amount:${fire_amount-e_amount_needed}}}`)
                        //server.runCommandSilent(`data merge block ${earth_pos_x} ${earth_pos_y} ${earth_pos_z} {element_storage:{element_amount:${earth_amount-e_amount_needed}}}`)
                        //server.runCommandSilent(`data merge block ${block.x} ${block.y} ${block.z} {mana:${mana_amount-b_amount_needed}}`)
                        e = 1
                    }
                }
            }
        })
    
        pos_base2.forEach(pos2 =>{
            let a_scheme = [
                [pos2.id,pos2.getEntityData().get("source"),pos2.x,pos2.y,pos2.z]
            ]
    
            for([a_id,a_amount,a_pos_x,a_pos_y,a_pos_z] of a_scheme){
                if(a_id !== aid) return
    
                if(a_amount1 == undefined && a_amount2 == undefined && a_amount3 == undefined && a_amount4 == undefined){
                    a_amount1 = a_amount
                    a1_pos_x = a_pos_x
                    a1_pos_y = a_pos_y
                    a1_pos_z = a_pos_z
                }else if(a_amount1 != undefined && a_amount2 == undefined && a_amount3 == undefined && a_amount4 == undefined){
                    a_amount2 = a_amount
                    a2_pos_x = a_pos_x
                    a2_pos_y = a_pos_y
                    a2_pos_z = a_pos_z
                }else if(a_amount2 != undefined && a_amount3 == undefined && a_amount4 == undefined){
                    a_amount3 = a_amount
                    a3_pos_x = a_pos_x
                    a3_pos_y = a_pos_y
                    a3_pos_z = a_pos_z
                }else if(a_amount3 != undefined && a_amount4 == undefined){
                    a_amount4 = a_amount
                    a4_pos_x = a_pos_x
                    a4_pos_y = a_pos_y
                    a4_pos_z = a_pos_z
                }
            
                if(((a_amount1 && a_amount2 && a_amount3 && a_amount4) != undefined) && (a_amount1 >= a_amount_needed && a_amount2 >= a_amount_needed && a_amount3 >= a_amount_needed && a_amount4 >= a_amount_needed)/* && block.offset(0,-1,0).id == 'compactmachines:solid_wall'*/){
                    //player.tell(`\u00a7damount1:${a_amount1}\u00a7f魔源 \u00a7damount2:${a_amount2}\u00a7f魔源 \u00a7damount3:${a_amount3}\u00a7f魔源 \u00a7damount4:${a_amount4}\u00a7f魔源`)
                    //server.runCommandSilent(`data merge block ${a1_pos_x} ${a1_pos_y} ${a1_pos_z} {source:${a_amount1-a_amount_needed}}`)
                    //server.runCommandSilent(`data merge block ${a2_pos_x} ${a2_pos_y} ${a2_pos_z} {source:${a_amount2-a_amount_needed}}`)
                    //server.runCommandSilent(`data merge block ${a3_pos_x} ${a3_pos_y} ${a3_pos_z} {source:${a_amount3-a_amount_needed}}`)
                    //server.runCommandSilent(`data merge block ${a4_pos_x} ${a4_pos_y} ${a4_pos_z} {source:${a_amount4-a_amount_needed}}`)
                    a = 1
                }
            }
        })
    
        if(player.mainHandItem == input && a == 1 && e == 1 && temp == 0/*block.offset(0,-1,0).id == 'compactmachines:solid_wall'*/){
            temp = 1
            // block.offset(0,-1,0).set('kubejs:compact_soild_wall')
            //player.tell(`\u00a7bmana:${mana_amount} \u00a76air:${air_amount} \u00a7aearth:${earth_amount} \u00a7cfire:${fire_amount} \u00a73water:${water_amount}`)
            server.runCommandSilent(`data merge block ${air_pos_x} ${air_pos_y} ${air_pos_z} {element_storage:{element_amount:${air_amount-air_amounts}}}`)
            server.runCommandSilent(`data merge block ${water_pos_x} ${water_pos_y} ${water_pos_z} {element_storage:{element_amount:${water_amount-water_amounts}}}`)
            server.runCommandSilent(`data merge block ${fire_pos_x} ${fire_pos_y} ${fire_pos_z} {element_storage:{element_amount:${fire_amount-fire_amounts}}}`)
            server.runCommandSilent(`data merge block ${earth_pos_x} ${earth_pos_y} ${earth_pos_z} {element_storage:{element_amount:${earth_amount-earth_amounts}}}`)
            server.runCommandSilent(`data merge block ${block.x} ${block.y} ${block.z} {mana:${mana_amount-b_amount_needed}}`)
    
            //player.tell(`\u00a7damount1:${a_amount1}\u00a7f魔源 \u00a7damount2:${a_amount2}\u00a7f魔源 \u00a7damount3:${a_amount3}\u00a7f魔源 \u00a7damount4:${a_amount4}\u00a7f魔源`)
            server.runCommandSilent(`data merge block ${a1_pos_x} ${a1_pos_y} ${a1_pos_z} {source:${a_amount1-a_amount_needed}}`)
            server.runCommandSilent(`data merge block ${a2_pos_x} ${a2_pos_y} ${a2_pos_z} {source:${a_amount2-a_amount_needed}}`)
            server.runCommandSilent(`data merge block ${a3_pos_x} ${a3_pos_y} ${a3_pos_z} {source:${a_amount3-a_amount_needed}}`)
            server.runCommandSilent(`data merge block ${a4_pos_x} ${a4_pos_y} ${a4_pos_z} {source:${a_amount4-a_amount_needed}}`)
    
            for(let i = 0;i < tick-9;i ++){
                server.scheduleInTicks(i,(event) =>{
                    server.runCommandSilent(`particle minecraft:ambient_entity_effect ${block.x} ${block.y + 0.2} ${block.z} 0 0 0 0.5 10 force @a`)
                    server.runCommandSilent(`particle minecraft:item elementalcraft:firecrystal ${fire_pos_x} ${fire_pos_y} ${fire_pos_z} 0.4 0.4 0.4 0.05 10 force @a`)
                    server.runCommandSilent(`particle minecraft:item elementalcraft:watercrystal ${water_pos_x} ${water_pos_y} ${water_pos_z} 0.4 0.4 0.4 0.05 10 force @a`)
                    server.runCommandSilent(`particle minecraft:item elementalcraft:earthcrystal ${earth_pos_x} ${earth_pos_y} ${earth_pos_z} 0.4 0.4 0.4 0.05 10 force @a`)
                    server.runCommandSilent(`particle minecraft:item elementalcraft:aircrystal ${air_pos_x} ${air_pos_y} ${air_pos_z} 0.4 0.4 0.4 0.05 10 force @a`)
                    server.runCommandSilent(`particle minecraft:block ars_nouveau:source_gem_block ${a1_pos_x} ${a1_pos_y + 1} ${a1_pos_z} 0 0 0 0.05 10 force @a`)
                    server.runCommandSilent(`particle minecraft:block ars_nouveau:source_gem_block ${a2_pos_x} ${a2_pos_y + 1} ${a2_pos_z} 0 0 0 0.05 10 force @a`)
                    server.runCommandSilent(`particle minecraft:block ars_nouveau:source_gem_block ${a3_pos_x} ${a3_pos_y + 1} ${a3_pos_z} 0 0 0 0.05 10 force @a`)
                    server.runCommandSilent(`particle minecraft:block ars_nouveau:source_gem_block ${a4_pos_x} ${a4_pos_y + 1} ${a4_pos_z} 0 0 0 0.05 10 force @a`)
                })
            }
    
            let itemEntity = block.createEntity("item")
            itemEntity.item = output
            itemEntity.x+=0.5
            itemEntity.y+=0.2
            itemEntity.z+=0.5
            server.scheduleInTicks(tick,(event) =>{
                itemEntity.spawn()
                // block.offset(0,-1,0).set('compactmachines:solid_wall')
                a = 0
                // b = 0
                e = 0
                temp = 0
            })
        }
    }


    elementalcraft_ars_nouveau_botania('botania:mana_diamond','minecraft:diamond',1000,1000,1000,1000,1000,10000,50)
    elementalcraft_ars_nouveau_botania('minecraft:blaze_spawn_egg','naturesaura:depth_ingot',5000,1000,1000,1000,5000,5000,50)
    elementalcraft_ars_nouveau_botania('elementalcraft:pristine_water_gem','elementalcraft:powerful_water_shard',100,50000,100,100,1000,1000,50)
    elementalcraft_ars_nouveau_botania('elementalcraft:pristine_air_gem','elementalcraft:powerful_air_shard',100,100,100,50000,1000,1000,50)
    elementalcraft_ars_nouveau_botania('elementalcraft:pristine_fire_gem','elementalcraft:powerful_fire_shard',50000,100,100,100,1000,1000,50)
    elementalcraft_ars_nouveau_botania('elementalcraft:pristine_earth_gem','elementalcraft:powerful_earth_shard',100,100,50000,100,1000,1000,50)
})