ItemEvents.rightClicked(event =>{
    const {hand,item,player,server} =event
    if(player.offHandItem == 'minecraft:air') return;
    if(((player.spectator)||(player.creative))&&(player.offHandItem == 'minecraft:diamond')&&(player.mainHandItem == 'minecraft:air')&&(player.shiftKeyDown)){
        player.tell("重新加载中!")
        player.runCommandSilent('reload')
    }
})