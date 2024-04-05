ItemEvents.rightClicked(event =>{
    const {hand,item,player,server} =event
    if(player.mainHandItem == 'minecraft:air') return;
    const ItemID = item.id
    if((player.offHandItem == 'minecraft:diamond')&&(player.shiftKeyDown)&&((player.spectator)||(player.creative))){
        if(player.mainHandItem == ItemID){
            player.runCommandSilent('kubejs hand')
        }
    }
})