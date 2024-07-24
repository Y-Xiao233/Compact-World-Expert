CreateEvents.spoutHandler(event =>{
    let amount = 1000
    event.add("fluidtank_fill",'create:fluid_tank',(block, fluid ,simulate) =>{
        let tank_amount = block.entityData.TankContent.Amount
        let tank_fluid_type = block.entityData.TankContent.FluidName
        if(fluid.id == tank_fluid_type || tank_fluid_type == "minecraft:empty"){
            if(fluid.amount >= 1000 && tank_amount <= 8000 - amount){
                if(!simulate){
                    block.mergeEntityData(`{TankContent:{FluidName:'${fluid.id}',Amount:${tank_amount+amount}}}`)
                }return 1000;
            }return 0;
        }else return 0;
    })
})

/*
CreateEvents.spoutHandler(event =>{

    function spoutrecipe(helditem,input_fluid,amount,output_item,id){
        event.add(id,'create:depot',(block, fluid ,simulate) =>{

            if(fluid.id == input_fluid && fluid.amount >= amount && block.entityData.contains("HeldItem")){
                if(block.entityData.HeldItem.Item.id == helditem){
                    if(block.entityData.OutputBuffer.Items.length !== 0){
                        if(block.entityData.OutputBuffer.Items["0"].Count >= 64) return 0;
                    }
                    if(!simulate){
                        let heldItem_count = block.entityData.HeldItem.Item.Count
                        if(block.entityData.OutputBuffer.Items.length === 0){
                            block.mergeEntityData(`{HeldItem:{Item:{id:'${helditem}',Count:${heldItem_count}b}},OutputBuffer:{Size:8,Items:[{Slot:0,id:'${output_item}',Count:1b}]}}`)
                        }else{
                            let depot_press_outputitem_count = block.entityData.OutputBuffer.Items["0"].Count
                            if(depot_press_outputitem_count < 64){
                                block.mergeEntityData(`{HeldItem:{Item:{id:'${helditem}',Count:${heldItem_count}b}},OutputBuffer:{Size:8,Items:[{Slot:0,id:'${output_item}',Count:${depot_press_outputitem_count+1}b}]}}`)
                            }
                        }
                    }return 1000;
                }return 0;
            }else return 0;
        })
    }

    spoutrecipe('kubejs:spirit_press','starbunclemania:source_fluid',1000,'malum:arcane_spirit','arcane_spirit')
})
*/

CreateEvents.spoutHandler(event =>{
    function spoutrecipe(held_item,input_fluid,amount,output,id){
        event.add(id, 'create:depot', (block, fluid, simulate) =>{
            if(fluid.id == input_fluid && fluid.amount >= amount && block.entityData.contains("HeldItem")){
                let output_amount
                let heldItem_count = block.entityData.HeldItem.Item.Count
                let heldItem = block.entityData.HeldItem.Item.id

                if(block.entityData.OutputBuffer.Items.length === 0){
                    output_amount = 0
                }else if(block.entityData.OutputBuffer.Items.length !== 0){
                    output_amount = block.entityData.OutputBuffer.Items["0"].Count
                    if(output_amount >= 64) return 0;
                }

                if(heldItem == held_item){
                    if(!simulate){
                        // block.mergeEntityData(`{HeldItem:{Item:{id:'${heldItem}',Count:${heldItem_count}b}},OutputBuffer:{Size:8,Items:[{Slot:0,id:'${output}',Count:${output_amount+1}b}]}}`)
                        block.getLevel().server.runCommandSilent(`data merge block ${block.x} ${block.y} ${block.z} {HeldItem:{Item:{id:'${heldItem}',Count:${heldItem_count}b}},OutputBuffer:{Size:8,Items:[{Slot:0,id:'${output}',Count:${output_amount+1}b}]}}`)
                    }return 1000;
                }else return 0;
            }else return 0;
        })
    }
spoutrecipe('kubejs:spirit_press','starbunclemania:source_fluid',1000,'malum:arcane_spirit','arcane_spirit')
})