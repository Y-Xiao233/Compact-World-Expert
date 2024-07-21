BlockEvents.placed(event =>{
    const {player, block} = event
    //if(hand.name() != "MAIN_HAND") return
    if(block.id != 'elementalcraft:source') return

    if(player.mainHandItem == 'elementalcraft:source' && player.offHandItem != 'minecraft:empty'){
        if(player.offHandItem == 'minecraft:water_bucket'){
            block.mergeEntityData({element_storage:{element_type:'water'}});
        }else if(player.offHandItem == 'minecraft:grass'){
            block.mergeEntityData({element_storage:{element_type:'earth'}});
        }else if(player.offHandItem == 'elementalcraft:inert_crystal'){
            block.mergeEntityData({element_storage:{element_type:'air'}});
        }else if(player.offHandItem == 'hexerei:mindful_trance_blend'){
            block.mergeEntityData({element_storage:{element_type:'fire'}});
        }
    }
})